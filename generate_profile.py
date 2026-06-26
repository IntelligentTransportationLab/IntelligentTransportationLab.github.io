#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从 JSON 数据生成 team-member-profile 新格式 HTML
用法: python generate_profile.py caixiaoyu
"""

import json
import sys
import os

def load_data(name):
    json_path = os.path.join(os.path.dirname(__file__), 'data', f'{name}.json')
    with open(json_path, 'r', encoding='utf-8') as f:
        return json.load(f)

# ============================================================
# 新格式模板片段
# ============================================================

def render_item(title, fields, badge=None):
    """渲染单行 flex-wrap 格式的条目"""
    parts = [f'                  <h7 class="fw-bold text-primary mb-0 me-2">{title}</h7>']
    for i, (label, value) in enumerate(fields):
        if i == 0:
            parts.append(f'                  <span class="d-inline-block mx-2 text-muted">|</span>')
        parts.append(f'                  <span class="text-dark me-2"><strong>{label}:</strong> {value}</span>')
        if i < len(fields) - 1:
            parts.append(f'                  <span class="d-inline-block mx-2 text-muted">|</span>')
    if badge:
        parts.append(f'                  <span class="badge bg-info text-dark ms-2">{badge}</span>')
    inner = '\n'.join(parts)
    return f'''              <div class="col-12 mb-3">
                <div class="d-flex flex-wrap align-items-center">
{inner}
                </div>
              </div>'''

def render_section_header(title):
    return f'''            <div class="offset-top-30 offset-md-top-60">
              <h6 class="fw-bold">{title}</h6>
              <div class="text-subline"></div>
            </div>'''

def render_sub_header(title):
    return f'''              <div class="col-12 mb-2 mt-4">
                <h7 class="fw-bold text-dark">{title}</h7>
              </div>'''

# ============================================================
# 各模块渲染函数
# ============================================================

def render_education(data):
    rows = []
    for e in data['education']:
        rows.append(f'''              <tr>
                <td>{e['degree']}</td>
                <td>{e['school']}</td>
                <td>{e['major']}</td>
                <td>{e['time']}</td>
              </tr>''')
    return '\n'.join(rows)

def render_work(data):
    rows = []
    for w in data['work_experience']:
        rows.append(f'''              <tr>
                <td>{w['company']}</td>
                <td>{w['department']}</td>
                <td>{w['position']}</td>
                <td>{w['title']}</td>
                <td>{w['time']}</td>
              </tr>''')
    return '\n'.join(rows)

def render_societies(data):
    items = []
    for s in data['societies']:
        items.append(render_item(s['name'], [
            ('职务', s['role']),
            ('任期', s['term'])
        ]))
    return '\n'.join(items)

def render_teaching(data):
    items = []
    for t in data['teaching']:
        cat = t['category']
        if cat == 'project':
            items.append(render_item(t['name'], [
                ('项目类型', t['type']),
                ('主持人', t['role']),
                ('时间', t['time'])
            ]))
        elif cat == 'competition':
            fields = [
                ('奖励', t['award']),
                ('授奖单位', t['unit']),
            ]
            if 'rank' in t:
                fields.append(('排名', t['rank']))
            if 'project' in t:
                fields.append(('项目', t['project']))
            fields.append(('时间', t['time']))
            items.append(render_item(t['name'], fields))
        elif cat == 'teaching_award':
            items.append(render_item(t['name'], [
                ('奖励', t['award']),
                ('授奖单位', t['unit']),
                ('时间', t['time'])
            ]))
    return '\n'.join(items)

def render_projects(data):
    sections = []
    proj = data['projects']
    
    # 省部级
    sections.append(render_sub_header('省部级科技项目：'))
    for p in proj['provincial']:
        fields = [('立项单位', p['unit'])]
        if p['number']:
            fields.append(('项目编号', p['number']))
        fields.append(('起止时间', p['time']))
        fields.append(('', p['role']))
        # 最后一个字段的label为空，特殊处理
        items_html = _render_item_with_last_no_label(p['name'], fields)
        sections.append(items_html)
    
    # 厅局级
    sections.append(render_sub_header('厅局级科技项目：'))
    for p in proj['departmental']:
        fields = [('立项单位', p['unit'])]
        if p['number']:
            fields.append(('项目编号', p['number']))
        fields.append(('起止时间', p['time']))
        fields.append(('', p['role']))
        sections.append(_render_item_with_last_no_label(p['name'], fields))
    
    # 企事业单位
    sections.append(render_sub_header('企事业单位科技项目：'))
    for p in proj['enterprise']:
        fields = []
        if p.get('subtitle'):
            fields.append(('项目名称', p['subtitle']))
        if p.get('unit'):
            fields.append(('立项单位', p['unit']))
        fields.append(('起止时间', p['time']))
        fields.append(('', p['role']))
        sections.append(_render_item_with_last_no_label(p['name'], fields))
    
    return '\n'.join(sections)

def _render_item_with_last_no_label(title, fields):
    """最后一个字段 label 为空时，不显示冒号"""
    parts = [f'                  <h7 class="fw-bold text-primary mb-0 me-2">{title}</h7>']
    for i, (label, value) in enumerate(fields):
        parts.append(f'                  <span class="d-inline-block mx-2 text-muted">|</span>')
        if label:
            parts.append(f'                  <span class="text-dark me-2"><strong>{label}:</strong> {value}</span>')
        else:
            parts.append(f'                  <span class="text-dark"><strong>{value}</strong></span>')
    inner = '\n'.join(parts)
    return f'''              <div class="col-12 mb-3">
                <div class="d-flex flex-wrap align-items-center">
{inner}
                </div>
              </div>'''

def render_papers(data):
    sections = []
    papers = data['papers']
    
    # SCI 英文
    sections.append(render_sub_header('SCI期刊论文（英文）：'))
    for p in papers['sci_english']:
        detail_parts = []
        if p['authors']:
            detail_parts.append(f'Authors: {p["authors"]}')
        if p['journal']:
            j = f'<em>{p["journal"]}</em>'
            if p['year']:
                j += f', {p["year"]}'
            if p['volume']:
                j += f', {p["volume"]}'
            if p['pages']:
                j += f', {p["pages"]}'
            detail_parts.append(j)
        if p.get('doi'):
            detail_parts.append(f'DOI: <a href="{p["doi"]}" target="_blank">{p["doi"]}</a>')
        
        fields = [('', d) for d in detail_parts]
        badge = p.get('badge', '')
        sections.append(_render_paper_item(p['title'], fields, badge))
    
    # EI 中文
    sections.append(render_sub_header('EI期刊论文（中文）：'))
    for p in papers['ei_chinese']:
        detail_parts = []
        if p['authors']:
            detail_parts.append(f'作者：{p["authors"]}')
        if p['journal']:
            j = f'<em>{p["journal"]}</em>'
            if p['year']:
                j += f', {p["year"]}'
            if p['volume']:
                j += f', {p["volume"]}'
            if p['pages']:
                j += f': {p["pages"]}'
            detail_parts.append(j)
        fields = [('', d) for d in detail_parts]
        badge = p.get('badge', '')
        sections.append(_render_paper_item(p['title'], fields, badge))
    
    # EI 会议
    if papers.get('ei_conference'):
        sections.append(render_sub_header('EI会议论文：'))
        for p in papers['ei_conference']:
            detail_parts = []
            if p['authors']:
                detail_parts.append(f'作者：{p["authors"]}')
            if p.get('conference'):
                detail_parts.append(f'会议：<em>{p["conference"]}</em>, {p["year"]}')
            fields = [('', d) for d in detail_parts]
            badge = p.get('badge', '')
            sections.append(_render_paper_item(p['title'], fields, badge))
    
    # 中文核心
    sections.append(render_sub_header('中文核心期刊论文：'))
    for p in papers['core_chinese']:
        detail_parts = []
        if p['authors']:
            detail_parts.append(f'作者：{p["authors"]}')
        if p['journal']:
            j = f'<em>{p["journal"]}</em>'
            if p['year']:
                j += f', {p["year"]}'
            if p['volume']:
                j += f', {p["volume"]}'
            if p['pages']:
                j += f': {p["pages"]}'
            detail_parts.append(j)
        fields = [('', d) for d in detail_parts]
        badge = p.get('badge', '')
        sections.append(_render_paper_item(p['title'], fields, badge))
    
    # 科技核心
    sections.append(render_sub_header('科技核心期刊论文：'))
    for p in papers['tech_core']:
        detail_parts = []
        if p['authors']:
            detail_parts.append(f'作者：{p["authors"]}')
        if p['journal']:
            j = f'<em>{p["journal"]}</em>'
            if p['year']:
                j += f', {p["year"]}'
            if p['volume']:
                j += f', {p["volume"]}'
            if p['pages']:
                j += f': {p["pages"]}'
            detail_parts.append(j)
        fields = [('', d) for d in detail_parts]
        badge = p.get('badge', '')
        sections.append(_render_paper_item(p['title'], fields, badge))
    
    # 会议论文
    sections.append(render_sub_header('会议论文：'))
    for p in papers['conference']:
        detail_parts = []
        if p['authors']:
            detail_parts.append(f'作者：{p["authors"]}')
        if p.get('conference'):
            c = f'会议：<em>{p["conference"]}</em>'
            if p.get('year'):
                c += f', {p["year"]}'
            if p.get('pages'):
                c += f': {p["pages"]}'
            detail_parts.append(c)
        fields = [('', d) for d in detail_parts]
        badge = p.get('badge', '')
        sections.append(_render_paper_item(p['title'], fields, badge))
    
    return '\n'.join(sections)

def _render_paper_item(title, fields, badge=''):
    parts = [f'                  <h7 class="fw-bold text-primary mb-0 me-2">{title}</h7>']
    for i, (label, value) in enumerate(fields):
        parts.append(f'                  <span class="d-inline-block mx-2 text-muted">|</span>')
        if label:
            parts.append(f'                  <span class="text-dark me-2"><strong>{label}:</strong> {value}</span>')
        else:
            parts.append(f'                  <span class="text-dark me-2">{value}</span>')
    if badge:
        parts.append(f'                  <span class="badge bg-info text-dark ms-2">{badge}</span>')
    inner = '\n'.join(parts)
    return f'''              <div class="col-12 mb-3">
                <div class="d-flex flex-wrap align-items-center">
{inner}
                </div>
              </div>'''

def render_reports(data):
    items = []
    for r in data['reports']:
        fields = [
            ('刊物', r['publication']),
            ('时间', r['time']),
            ('批示', f'<span class="text-success">{r["approval"]}</span>')
        ]
        items.append(render_item(r['title'], fields))
    return '\n'.join(items)

def render_patents(data):
    items = []
    # 发明专利
    for p in data['patents']:
        fields = [
            ('发明人', p['inventors']),
            ('专利号', f'<em>{p["number"]}</em> {p["type"]}')
        ]
        if p['date']:
            fields.append(('授权公告日', p['date']))
        items.append(render_item(p['title'], fields))
    
    # 软件著作权
    for s in data['software_copyrights']:
        fields = [
            ('著作人', s['authors']),
            ('授权号', f'<em>{s["number"]}</em> {s["type"]}')
        ]
        items.append(render_item(s['title'], fields))
    
    return '\n'.join(items)

def render_awards(data):
    items = []
    for a in data['awards']:
        fields = [
            ('奖励', a['award'])
        ]
        if a.get('unit'):
            fields.append(('授奖单位', a['unit']))
        fields.append(('排名', a['rank']))
        fields.append(('时间', a['time']))
        items.append(render_item(a['name'], fields))
    return '\n'.join(items)

def render_honors(data):
    items = []
    for h in data['honors']:
        fields = [
            ('授予单位', h['unit']),
            ('时间', h['time'])
        ]
        items.append(render_item(h['name'], fields))
    return '\n'.join(items)

# ============================================================
# 主模板
# ============================================================

def generate_html(data):
    return f'''<!DOCTYPE html>
<html class="wide wow-animation scrollTo" lang="en">

<head>
  <title>Team Member Profile</title>
  <meta charset="utf-8">
  <meta name="format-detection" content="telephone=no">
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="keywords" content="intense web design multipurpose template">
  <meta name="date" content="Dec 26">
  <link rel="icon" href="images/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300italic,300,400italic,600,700%7CMerriweather:400,300,300italic,400italic,700,700italic">
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/fonts.css">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <div class="preloader">
    <div class="preloader-body">
      <div class="cssload-container">
        <div class="cssload-speeding-wheel"></div>
      </div>
      <p>Loading...</p>
    </div>
  </div>
  <div class="page text-center">
    <header class="page-head header-panel-absolute">
      <div class="rd-navbar-wrap">
        <nav class="rd-navbar rd-navbar-default" data-auto-height="false" data-lg-auto-height="true" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-xl-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-md-device-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="210px" data-xl-stick-up-offset="85px" data-xxl-stick-up-offset="85px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
          <div class="rd-navbar-inner">
            <div class="rd-navbar-panel">
              <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar, .rd-navbar-nav-wrap"><span></span></button>
              <h4 class="panel-title d-lg-none">Home</h4>
              <button class="rd-navbar-top-panel-toggle d-lg-none" data-rd-navbar-toggle=".rd-navbar-top-panel"><span></span></button>
              <div class="rd-navbar-top-panel">
                <div class="rd-navbar-top-panel-left-part">
                  <ul class="list-unstyled">
                    <li>
                      <div class="unit flex-row align-items-center unit-spacing-xs">
                        <div class="unit-left"><span class="icon mdi mdi-phone align-middle"></span></div>
                        <div class="unit-body"><a href="tel:#">(023)62651999,</a> <a class="d-block d-lg-inline-block" href="tel:#">(023)62650561</a></div>
                      </div>
                    </li>
                    <li>
                      <div class="unit flex-row align-items-center unit-spacing-xs">
                        <div class="unit-left"><span class="icon mdi mdi-map-marker align-middle"></span></div>
                        <div class="unit-body"><a href="#">重庆市双福新区福星大道1号</a></div>
                      </div>
                    </li>
                    <li>
                      <div class="unit flex-row align-items-center unit-spacing-xs">
                        <div class="unit-left"><span class="icon mdi mdi-email-open align-middle"></span></div>
                        <div class="unit-body"><a href="mailto:#">cqjtukxc@cqjtu.edu.cn</a></div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="rd-navbar-top-panel-right-part">
                  <div class="rd-navbar-top-panel-left-part">
                    <div class="unit flex-row align-items-center unit-spacing-xs"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rd-navbar-menu-wrap clearfix">
              <div class="rd-navbar-brand"><a class="d-inline-block" href="index.html">
                  <div class="unit align-items-sm-center unit-xl unit-spacing-custom">
                    <div class="unit-left"><img width='170' height='172' src='img/logo.png' alt='' /></div>
                    <div class="unit-body">
                      <div class="rd-navbar-brand-title">重庆交通大学</div>
                      <div class="rd-navbar-brand-slogan">空地协同与智能驾驶课题组</div>
                    </div>
                  </div>
                </a></div>
              <div class="rd-navbar-nav-wrap">
                <div class="rd-navbar-mobile-scroll">
                  <div class="rd-navbar-mobile-header-wrap">
                    <div class="rd-navbar-mobile-brand"><a href="index.html"><img width='136' height='138' src='images/logo-170x172.png' alt='' /></a></div>
                  </div>
                  <ul class="rd-navbar-nav">
                    <li><a href="#">新闻动态</a>
                      <ul class="rd-navbar-dropdown">
                        <li><a href="grid-news.html">最近新闻</a></li>
                        <li><a href="grid-news-3-columns.html">课题组活动</a></li>
                      </ul>
                    </li>
                    <li><a href="#">走进课题组</a>
                      <div class="rd-navbar-dropdown">
                        <div class="row section-relative">
                          <ul class="col-md-12">
                            <li><h6 style="color: #f4f0f0;">课题组简介</h6>
                              <ul class="list-unstyled offset-lg-top-20">
                                <li><a href="academics.html">关于我们</a></li>
                              </ul>
                            </li>
                          </ul>
                          <ul class="col-md-12">
                            <li><h6 style="color: #f4f0f0;">组内成员</h6>
                              <ul class="list-unstyled offset-lg-top-20">
                                <li><a href="people.html">教师</a></li>
                                <li><a href="people.html">博士后和专职研究人员</a></li>
                                <li><a href="people.html">博士研究生</a></li>
                                <li><a href="people.html">硕士研究生</a></li>
                                <li><a href="people.html">往届学生</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li><a href="#">科学研究</a>
                      <ul class="rd-navbar-dropdown">
                        <li><a href="yanjiuketi.html">研究课题</a></li>
                        <li><a href="jiangli.html">奖励与荣誉</a></li>
                        <li><a href="paper.html">论文专著</a></li>
                        <li><a href="biaozhun.html">标准规范</a></li>
                        <li><a href="kaiyuan.html">开源数据</a></li>
                      </ul>
                    </li>
                    <li><a href="#">工程实践</a>
                      <ul class="rd-navbar-dropdown">
                        <li><a href="daibiaoxiangmu.html">代表性项目</a></li>
                        <li><a href="grid.html">研发产品</a></li>
                      </ul>
                    </li>
                    <li><a href="#">教学活动</a>
                      <ul class="rd-navbar-dropdown">
                        <li><a href="kecheng.html">教学课程</a></li>
                        <li><a href="jingsai.html">专业竞赛</a></li>
                        <li><a href="kewai.html">课外活动</a></li>
                      </ul>
                    </li>
                    <li><a href="#">联系交流</a>
                      <ul class="rd-navbar-dropdown">
                        <li><a href="contacts.html">联系方式</a></li>
                        <li><a href="zhaopin.html">招聘信息</a></li>
                        <li><a href="contacts.html">留言板</a></li>
                      </ul>
                    </li>
                  </ul>
                  <div class="rd-navbar-search-mobile" id="rd-navbar-search-mobile">
                    <form class="rd-navbar-search-form search-form-icon-right rd-search" action="search-results.html" method="GET">
                      <div class="form-wrap">
                        <label class="form-label" for="rd-navbar-mobile-search-form-input">Search...</label>
                        <input class="rd-navbar-search-form-input form-input form-input-gray-lightest" id="rd-navbar-mobile-search-form-input" type="text" name="s" autocomplete="off" />
                      </div>
                      <button class="icon fa fa-search rd-navbar-search-button" type="submit"></button>
                    </form>
                  </div>
                </div>
                <div>
                  <div class="rd-navbar-search"><a class="rd-navbar-search-toggle mdi" data-rd-navbar-toggle=".rd-navbar-search" href="#"><span></span></a>
                    <form class="rd-navbar-search-form search-form-icon-right rd-search" action="search-results.html" data-search-live="rd-search-results-live" method="GET">
                      <div class="form-wrap">
                        <label class="form-label" for="rd-navbar-search-form-input">Search</label>
                        <input class="rd-navbar-search-form-input form-input form-input-gray-lightest" id="rd-navbar-search-form-input" type="text" name="s" autocomplete="off" />
                        <div class="rd-search-results-live" id="rd-search-results-live"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <section class="section breadcrumb-classic context-dark">
      <div class="container">
        <h1>个人信息</h1>
        <div class="offset-top-10 offset-md-top-35">
          <ul class="list-inline list-inline-lg list-inline-dashed p">
            <li><a href="index.html">主页</a></li>
            <li><a href="#">走进课题组</a></li>
            <li><a href="#">团队成员</a></li>
            <li>个人信息</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section section-xl bg-default">
      <div class="container">
        <div class="row row-30 justify-content-sm-center">
          <div class="col-md-5 col-lg-4 text-md-start">
            <div class="inset-md-right-30"><img class="img-responsive d-inline-block" src="{data['personal']['avatar']}" width="340" height="340" alt="">
              <div class="offset-top-15 offset-sm-top-30">
                <ul class="list list-unstyled">
                  <li>
                    <span class="icon icon-xs mdi mdi-phone align-middle text-madison"></span>
                    <a class="d-inline-block text-dark inset-left-10" href="tel:#">{data['personal']['phone']}</a>
                  </li>
                  <li>
                    <span class="icon icon-xs mdi mdi-email-open align-middle text-madison"></span>
                    <a class="d-inline-block inset-left-10" href="mailto:info@demolink.org">{data['personal']['email']}</a>
                  </li>
                </ul>
              </div>
              <div class="offset-top-15 offset-sm-top-30">
                <ul class="list-inline list-inline-xs list-inline-madison">
                  <li><a class="icon icon-xxs fa fa-facebook icon-circle icon-gray-light-filled" href="#"></a></li>
                  <li><a class="icon icon-xxs fa fa-twitter icon-circle icon-gray-light-filled" href="#"></a></li>
                  <li><a class="icon icon-xxs fa fa-google icon-circle icon-gray-light-filled" href="#"></a></li>
                  <li><a class="icon icon-xxs fa fa-instagram icon-circle icon-gray-light-filled" href="#"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-lg-8 text-start">
            <div>
              <h2 class="fw-bold">{data['personal']['name']}</h2>
            </div>
            <p class="offset-top-10">{data['personal']['title']}</p>
            <div class="offset-top-15 offset-sm-top-30">
              <hr class="divider bg-madison hr-left-0">
            </div>
            <div class="offset-top-30 offset-md-top-60">
              <h6 class="fw-bold">个人简介</h6>
              <div class="text-subline"></div>
            </div>
            <div class="offset-top-20">
              <p>{data['personal']['bio']}</p>
              <p>{data['personal']['bio2']}</p>
            </div>
          </div>
          {render_section_header('研究方向')}
          <div class="row offset-top-15 offset-sm-top-30">
''' + ''.join(f'''            <div class="col-md-6 col-lg-6 mb-3">
              <div class="card p-3 shadow-sm">
                <strong>{d}</strong>
              </div>
            </div>
''' for d in data['research_directions']) + f'''          </div>
          {render_section_header('教育经历')}
          <p> </p>
          <table class="table table-custom table-dark-blue table-fixed" data-responsive="true">
            <tr>
              <th>学位</th>
              <th>学校</th>
              <th>专业</th>
              <th>时间</th>
            </tr>
{render_education(data)}
          </table>
          {render_section_header('工作经历')}
          <p> </p>
          <table class="table table-custom table-primary table-fixed" data-responsive="true">
            <tr>
              <th>工作单位</th>
              <th>部门/院系</th>
              <th>职务</th>
              <th>职称</th>
              <th>时间</th>
            </tr>
{render_work(data)}
          </table>
          {render_section_header('学会团体')}
          <p> </p>
          <div class="row">
{render_societies(data)}
          </div>
          {render_section_header('教育教学')}
          <div class="row">
{render_teaching(data)}
          </div>
          {render_section_header('主要科研项目业绩')}
          <div class="row">
{render_projects(data)}
          </div>
          {render_section_header('论文')}
          <p> </p>
          <div class="row">
{render_papers(data)}
          </div>
          {render_section_header('资政报告')}
          <p> </p>
          <div class="row">
{render_reports(data)}
          </div>
          {render_section_header('知识产权')}
          <div class="row">
{render_patents(data)}
          </div>
          {render_section_header('科技奖励')}
          <div class="row">
{render_awards(data)}
          </div>
          {render_section_header('个人荣誉')}
          <p> </p>
          <div class="row">
{render_honors(data)}
          </div>
        </div>
      </div>
    </section>
    <footer class="page-footer">
      <div class="hr bg-gray-light"></div>
      <div class="container section-xs block-after-divider">
        <div class="row row-50 justify-content-xl-between justify-content-sm-center">
          <div class="col-lg-3 col-xl-2">
            <a class="d-inline-block" href="index.html"><img width='170' height='172' src='img/logo.png' alt='' />
              <div>
                <h6 class="barnd-name fw-bold offset-top-25">重庆交通大学</h6>
              </div>
            </a>
          </div>
          <div class="col-sm-10 col-lg-5 col-xl-4 text-xl-start">
            <h6 class="fw-bold">联系我们</h6>
            <div class="text-subline"></div>
            <div class="offset-top-30">
              <ul class="list-unstyled contact-info list">
                <li>
                  <div class="unit flex-row align-items-center unit-spacing-xs">
                    <div class="unit-left"><span class="icon mdi mdi-phone align-middle icon-xs text-madison"></span></div>
                    <div class="unit-body"><a class="text-dark" href="tel:#">(023)62651999,</a> <a class="d-block d-lg-inline-block text-dark" href="tel:#">(023)62650561</a></div>
                  </div>
                </li>
                <li class="offset-top-15">
                  <div class="unit flex-row align-items-center unit-spacing-xs">
                    <div class="unit-left"><span class="icon mdi mdi-map-marker align-middle icon-xs text-madison"></span></div>
                    <div class="unit-body text-start"><a class="text-dark" href="#">重庆市双福新区福星大道1号</a></div>
                  </div>
                </li>
                <li class="offset-top-15">
                  <div class="unit flex-row align-items-center unit-spacing-xs">
                    <div class="unit-left"><span class="icon mdi mdi-email-open align-middle icon-xs text-madison"></span></div>
                    <div class="unit-body"><a href="mailto:#">cqjtukxc@cqjtu.edu.cn</a></div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="offset-top-15 text-start">
              <ul class="list-inline list-inline-xs list-inline-madison">
                <li><a class="icon icon-xxs fa fa-facebook icon-circle icon-gray-light-filled" href="#"></a></li>
                <li><a class="icon icon-xxs fa fa-twitter icon-circle icon-gray-light-filled" href="#"></a></li>
                <li><a class="icon icon-xxs fa fa-google icon-circle icon-gray-light-filled" href="#"></a></li>
                <li><a class="icon icon-xxs fa fa-instagram icon-circle icon-gray-light-filled" href="#"></a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-10 col-lg-8 col-xl-4 text-xl-start">
            <h6 class="fw-bold">学术合作</h6>
            <div class="text-subline"></div>
            <div class="offset-top-30 text-start">
              <p>在此留下您的邮箱以便于我们联系您</p>
            </div>
            <div class="offset-top-10">
              <form class="rd-mailform form-subscribe" data-form-output="form-output-global" data-form-type="subscribe" method="post" action="bat/rd-mailform.php">
                <div class="form-wrap">
                  <div class="input-group input-group-sm">
                    <input class="form-input" placeholder="Your e-mail" type="email" name="email" data-constraints="@Required @Email"><span class="input-group-btn">
                    <button class="btn btn-sm button-primary" type="submit">提交</button></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-madison context-dark">
        <div class="container text-lg-start section-5">
          <p class="rights"><span>&copy;&nbsp;</span><span class="copyright-year"></span><span>.&nbsp;</span><span>重庆交通大学</span><span>.&nbsp;</span><a>空地协同与智能驾驶课题组</a></p>
        </div>
      </div>
    </footer>
  </div>
  <div class="snackbars" id="form-output-global"></div>
  <script src="js/core.min.js"></script>
  <script src="js/script.js"></script>
</body>
</html>'''

# ============================================================
# 主入口
# ============================================================

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python generate_profile.py <name>")
        print("Example: python generate_profile.py caixiaoyu")
        sys.exit(1)
    
    name = sys.argv[1]
    data = load_data(name)
    html = generate_html(data)
    
    output_path = os.path.join(os.path.dirname(__file__), f'team-member-profile-{name}.html')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"Generated: {output_path}")
