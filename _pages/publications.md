---
layout: page
permalink: /publications/
title: Publications
description: 
years: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]
nav: true
---

[[Google scholar](https://scholar.google.com/citations?user=hBZ_tKsAAAAJ)] | [[DBLP](https://dblp.org/pid/19/2969-1.html)] | [[View by topic](https://jd92.wang/research/)]

#### Recent Preprints


- Understanding and Mitigating the Bias Inheritance in LLM-based Data Augmentation on Downstream Tasks. Miaomiao Li, Hao Chen, Yang Wang, Tingyuan Zhu, Weijia Zhang, Kaijie Zhu, Kam-Fai Wong, Jindong Wang. [[arxiv](https://arxiv.org/abs/2502.04419)]
- CultureVLM: Characterizing and Improving Cultural Understanding of Vision-Language Models for over 100 Countries. Shudong Liu, Yiqiao Jin, Cheng Li, Derek F. Wong, Qingsong Wen, Lichao Sun, Haipeng Chen, Xing Xie, Jindong Wang. [[arxiv](https://arxiv.org/abs/2501.01282)]
- MentalArena: Self-play Training of Language Models for Diagnosis and Treatment of Mental Health Disorders. Cheng Li, May Fung, Qingyun Wang, Chi Han, Manling Li, Jindong Wang, Heng Ji. [[arxiv](https://arxiv.org/abs/2410.06845)]
- On the Diversity of Synthetic Data and its Impact on Training Large Language Models. Hao Chen, Abdul Waheed, Xiang Li, Yidong Wang, Jindong Wang, Bhiksha Raj, Marah I. Abdin. [[arxiv](https://arxiv.org/abs/2410.15226)]
- SoftVQ-VAE: Efficient 1-Dimensional Continuous Tokenizer. Hao Chen, Ze Wang, Xiang Li, Ximeng Sun, Fangyi Chen, Jiang Liu, Jindong Wang, Bhiksha Raj, Zicheng Liu, Emad Barsoum. [[arxiv](https://arxiv.org/abs/2412.10958)]
- Social Science Meets LLMs: How Reliable Are Large Language Models in Social Simulations? Yue Huang, Zhengqing Yuan, Yujun Zhou, Kehan Guo, Xiangqi Wang, Haomin Zhuang, Weixiang Sun, Lichao Sun, Jindong Wang, Yanfang Ye, Xiangliang Zhang. [[arxiv](https://arxiv.org/abs/2410.23426)]
- Can I understand what I create? Self-Knowledge Evaluation of Large Language Models. Zhiquan Tan, Lai Wei, Jindong Wang, Xing Xie, Weiran Huang. [[arxiv](https://arxiv.org/abs/2406.06140)]
- Learning with noisy foundation models. Hao Chen, Jindong Wang, Zihan Wang, Ran Tao, Hongxin Wei, Xing Xie, Masashi Sugiyama, Bhiksha Raj. [[arxiv](https://arxiv.org/abs/2403.06869)]

<details>
<summary>More preprints</summary>
<ul>
  <li>
    Meta Semantic Template for Evaluation of Large Language Models. Yachuan Liu, Liang Chen, Jindong Wang, Qiaozhu Mei, Xing Xie. [<a href="https://arxiv.org/abs/2310.01448" target="_blank">arxiv</a>]
  </li>
  <li>
    Frustratingly Easy Model Generalization by Dummy Risk Minimization. Juncheng Wang, Jindong Wang, Xixu Hu, Shujun Wang, Xing Xie. [<a href="https://arxiv.org/abs/2308.02287" target="_blank">arxiv</a>]
  </li>
  <li>
    Equivariant Disentangled Transformation for Domain Generalization under Combination Shift. Yivan Zhang, Jindong Wang, Xing Xie, and Masashi Sugiyama. [<a href="https://arxiv.org/abs/2208.02011" target="_blank">arxiv</a>]
  </li>
  <li>
    Learning Invariant Representations across Domains and Tasks. Jindong Wang, Wenjie Feng, Chang Liu, Chaohui Yu, Mingxuan Du, Renjun Xu, Tao Qin, and Tie-Yan Liu. [<a href="https://arxiv.org/abs/2103.05114" target="_blank">arxiv</a>]
  </li>
  <li>
    Learning to match distributions for domain adaptation. Chaohui Yu, Jindong Wang, Chang Liu, Tao Qin, Renjun Xu, Wenjie Feng, Yiqiang Chen, and Tie-Yan Liu. [<a href="https://arxiv.org/abs/2007.10791" target="_blank">arxiv</a>]
  </li>
</ul>

</details>


#### Books

<div class="publications">

{% for y in page.years %}
  {% bibliography -f books -q @*[year={{y}}]* %}
{% endfor %}

</div>

#### Papers

<div class="publications">

{% for y in page.years %}
<div>{{y}}</div>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
