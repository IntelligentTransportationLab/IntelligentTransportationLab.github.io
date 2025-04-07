// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-awards",
          title: "Awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-group",
          title: "Group",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/group/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-our-new-chinese-textbook-迁移学习导论-is-officially-released-zhihu-buy-homepage",
          title: 'Our new Chinese textbook 《迁移学习导论》 is officially released! [Zhihu] [Buy] [Homepage]',
          description: "",
          section: "News",},{id: "news-our-paper-adarnn-adaptive-learning-and-forecasting-of-time-series-is-accepted-by-cikm-2021-arxiv-code",
          title: 'Our paper AdaRNN: Adaptive Learning and Forecasting of Time Series is accepted by...',
          description: "",
          section: "News",},{id: "news-our-paper-unsupervised-deep-anomaly-detection-for-multi-sensor-time-series-signals-is-accepted-by-ieee-tkde-arxiv",
          title: 'Our paper Unsupervised Deep Anomaly Detection for Multi-Sensor Time-Series Signals is accepted by...',
          description: "",
          section: "News",},{id: "news-two-of-our-papers-on-causality-for-generalization-and-semi-supervised-learning-are-accepted-by-neurips-2021",
          title: 'Two of our papers on causality for generalization and semi-supervised learning are accepted...',
          description: "",
          section: "News",},{id: "news-four-of-my-papers-are-ranked-top-20-in-recent-5-years-in-google-scholar-metrics-see-here",
          title: 'Four of my papers are ranked top 20 in recent 5 years in...',
          description: "",
          section: "News",},{id: "news-our-paper-remos-reducing-defect-inheritance-in-transfer-learning-via-relevant-model-slicing-is-accepted-by-icse-2022",
          title: 'Our paper ReMoS: Reducing Defect Inheritance in Transfer Learning via Relevant Model Slicing...',
          description: "",
          section: "News",},{id: "news-our-paper-exploiting-adapters-for-cross-lingual-low-resource-speech-recognition-is-accepted-by-ieee-acm-transactions-on-audio-speech-and-language-processing-taslp-arxiv-code",
          title: 'Our paper Exploiting Adapters for Cross-lingual Low-resource Speech Recognition is accepted by IEEE/ACM...',
          description: "",
          section: "News",},{id: "news-our-paper-adaptive-memory-networks-with-self-supervised-learning-for-unsupervised-anomaly-detection-has-been-accepted-by-ieee-tkde-arxiv",
          title: 'Our paper Adaptive Memory Networks with Self-supervised Learning for Unsupervised Anomaly Detection has...',
          description: "",
          section: "News",},{id: "news-i-was-selected-into-the-list-of-2022-ai-2000-most-influential-scholars-by-aminer-in-recognition-of-my-contributions-in-the-field-of-multimedia-between-2012-2021-ranked-49-2000",
          title: 'I was selected into the list of 2022 AI 2000 Most Influential Scholars...',
          description: "",
          section: "News",},{id: "news-i-will-give-a-tutorial-on-domain-generalization-at-ijcai-ecai-2022-on-july-website",
          title: 'I will give a tutorial on domain generalization at IJCAI-ECAI 2022 on July....',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-by-proceedings-of-the-acm-on-interactive-mobile-wearable-and-ubiquitous-technologies-imwut",
          title: 'One paper accepted by Proceedings of the ACM on Interactive, Mobile, Wearable and...',
          description: "",
          section: "News",},{id: "news-paper-boosting-cross-domain-speech-recognition-with-self-supervision-is-accepted-by-taslp-paper",
          title: 'Paper Boosting Cross-Domain Speech Recognition with Self-Supervision is accepted by TASLP! [paper]',
          description: "",
          section: "News",},{id: "news-our-personalized-federated-learning-paper-was-accepted-in-ieee-tbd-paper",
          title: 'Our personalized federated learning paper was accepted in IEEE TBD! [Paper]',
          description: "",
          section: "News",},{id: "news-our-domain-generalization-survey-paper-was-accepted-in-ieee-tkde-paper",
          title: 'Our domain generalization survey paper was accepted in IEEE TKDE! [Paper]',
          description: "",
          section: "News",},{id: "news-two-papers-on-pre-training-and-federated-learning-have-been-accepted-by-interspeech-2022",
          title: 'Two papers on pre-training and federated learning have been accepted by Interspeech 2022!...',
          description: "",
          section: "News",},{id: "news-our-paper-domain-invariant-feature-exploration-for-domain-generalization-has-been-accepted-by-tmlr-openreview",
          title: 'Our paper Domain-invariant Feature Exploration for Domain Generalization has been accepted by TMLR!...',
          description: "",
          section: "News",},{id: "news-our-paper-domain-generalization-for-activity-recognition-via-adaptive-feature-fusion-has-been-accepted-by-acm-tist",
          title: 'Our paper Domain generalization for activity recognition via adaptive feature fusion has been...',
          description: "",
          section: "News",},{id: "news-invited-to-be-a-senior-program-member-spc-of-aaai-2023",
          title: 'Invited to be a senior program member (SPC) of AAAI 2023.',
          description: "",
          section: "News",},{id: "news-迁移学习导论-第二版现已上市-主页",
          title: '《迁移学习导论》第二版现已上市！主页',
          description: "",
          section: "News",},{id: "news-paper-exploiting-unlabeled-data-for-target-oriented-opinion-words-extraction-is-accepted-by-coling-22",
          title: 'Paper Exploiting Unlabeled Data for Target-Oriented Opinion Words Extraction is accepted by COLING-22!...',
          description: "",
          section: "News",},{id: "news-our-paper-margin-calibration-for-long-tailed-visual-recognition-is-accepted-by-acml-2022-arxiv",
          title: 'Our paper Margin Calibration for Long-Tailed Visual Recognition is accepted by ACML 2022!...',
          description: "",
          section: "News",},{id: "news-paper-usb-a-unified-semi-supervised-learning-benchmark-is-accepted-by-neurips-2022-arxiv-code",
          title: 'Paper USB: A Unified Semi-supervised Learning Benchmark is accepted by NeurIPS 2022! [arXiv]...',
          description: "",
          section: "News",},{id: "news-we-will-give-a-tutorial-on-domain-ood-generalization-at-wsdm-2023",
          title: 'We will give a tutorial on domain/OOD generalization at WSDM 2023!',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-serve-as-a-senior-program-member-spc-of-ijcai-2023",
          title: 'I was invited to serve as a senior program member (SPC) of IJCAI...',
          description: "",
          section: "News",},{id: "news-three-papers-got-accepted-at-iclr-2023-see-here",
          title: 'Three papers got accepted at ICLR 2023! See here.',
          description: "",
          section: "News",},{id: "news-paper-on-the-robustness-of-chatgpt-an-adversarial-and-out-of-distribution-perspective-is-released-on-arxiv-arxiv",
          title: 'Paper On the Robustness of ChatGPT: An Adversarial and Out-of-distribution Perspective is released...',
          description: "",
          section: "News",},{id: "news-i-gave-a-tutorial-on-domain-generalization-and-chatgpt-robustness-on-wsdm-2023-website",
          title: 'I gave a tutorial on domain generalization and ChatGPT robustness on WSDM 2023....',
          description: "",
          section: "News",},{id: "news-the-english-version-of-迁移学习导论-is-published-online-springer",
          title: 'The English version of 迁移学习导论 is published online: [Springer]',
          description: "",
          section: "News",},{id: "news-two-papers-fedclip-and-chatgpt-robustness-are-accepted-by-iclr-2023-workshop-on-robust-large-models-papers",
          title: 'Two papers (FedCLIP and ChatGPT robustness) are accepted by ICLR 2023 workshop on...',
          description: "",
          section: "News",},{id: "news-we-will-give-a-tutorial-on-kdd-2023-named-trustworthy-machine-learning-generalization-robustness-and-interpretability",
          title: 'We will give a tutorial on KDD 2023 named “Trustworthy machine learning: generalization,...',
          description: "",
          section: "News",},{id: "news-the-large-model-for-large-model-evaluation-pandalm-is-released-on-github-pandalm-paper",
          title: 'The large model for large model evaluation “PandaLM” is released on Github! [PandaLM]...',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-by-kdd-2023",
          title: 'Two papers are accepted by KDD 2023.',
          description: "",
          section: "News",},{id: "news-i-was-nominated-as-the-area-chair-ac-for-neurips-2023-dataset-and-benchmark-track",
          title: 'I was nominated as the Area Chair (AC) for NeurIPS 2023 Dataset and...',
          description: "",
          section: "News",},{id: "news-promptbench-a-unified-benchmark-to-evaluate-the-adversarial-robustness-of-prompts-of-large-language-models-arxiv-code",
          title: 'PromptBench: a unified benchmark to evaluate the adversarial robustness of prompts of large...',
          description: "",
          section: "News",},{id: "news-paper-towards-optimization-and-model-selection-for-domain-generalization-a-mixup-guided-solution-is-accepted-by-kdd-2023-workshop-on-causal-discovery-prediction-and-decision-arxiv",
          title: 'Paper Towards Optimization and Model Selection for Domain Generalization: A Mixup-guided Solution is...',
          description: "",
          section: "News",},{id: "news-we-present-the-first-survey-on-evaluation-of-large-language-models-arxiv-code",
          title: 'We present the first survey on Evaluation of large language models! [arxiv] [code]...',
          description: "",
          section: "News",},{id: "news-paper-metafed-federated-learning-among-federations-with-cyclic-knowledge-distillation-is-accepted-by-ieee-tnnls-paper",
          title: 'Paper MetaFed: Federated Learning among Federations with Cyclic Knowledge Distillation is accepted by...',
          description: "",
          section: "News",},{id: "news-paper-improving-generalization-of-adversarial-training-via-robust-critical-fine-tuning-is-accepted-by-iccv-2023",
          title: 'Paper Improving Generalization of Adversarial Training via Robust Critical Fine-Tuning is accepted by...',
          description: "",
          section: "News",},{id: "news-paper-exploring-vision-language-models-for-imbalanced-learning-has-been-accepted-by-ijcv-paper-code",
          title: 'Paper Exploring Vision-Language Models for Imbalanced Learning has been accepted by IJCV! [paper]...',
          description: "",
          section: "News",},{id: "news-paper-distilling-out-of-distribution-robustness-from-vision-language-foundation-models-is-accepted-by-neurips-2023",
          title: 'Paper “Distilling Out-of-Distribution Robustness from Vision-Language Foundation Models” is accepted by NeurIPS 2023....',
          description: "",
          section: "News",},{id: "news-our-paper-out-of-distribution-generalization-in-text-classification-past-present-and-future-is-accepted-by-emnlp-2023-paper",
          title: 'Our paper “Out-of-Distribution Generalization in Text Classification: Past, Present, and Future” is accepted...',
          description: "",
          section: "News",},{id: "news-i-m-selected-as-one-of-the-world-s-top-2-scientists-by-stanford-university-news",
          title: 'I’m selected as one of the World’s Top 2% Scientists by Stanford University!...',
          description: "",
          section: "News",},{id: "news-our-new-work-competeai-understanding-the-competition-behaviors-in-large-language-model-based-agents-is-released-on-arxiv-paper",
          title: 'Our new work CompeteAI: Understanding the Competition Behaviors in Large Language Model-based Agents...',
          description: "",
          section: "News",},{id: "news-paper-optimization-free-test-time-adaptation-for-cross-person-activity-recognition-is-accepted-by-ubicomp-2024-arxiv",
          title: 'Paper Optimization-Free Test-Time Adaptation for Cross-Person Activity Recognition is accepted by UbiComp 2024!...',
          description: "",
          section: "News",},{id: "news-our-paper-fixed-frustratingly-easy-domain-generalization-with-mixup-is-accepted-by-conference-on-parsimony-and-learning-cpal-2023-arxiv",
          title: 'Our paper “FIXED: Frustratingly Easy Domain Generalization with Mixup” is accepted by Conference...',
          description: "",
          section: "News",},{id: "news-our-paper-up-net-an-uncertainty-driven-prototypical-network-for-few-shot-fault-diagnosis-is-accepted-by-ieee-tnnls",
          title: 'Our paper “UP-Net: An Uncertainty-Driven Prototypical Network for Few-Shot Fault Diagnosis” is accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-towards-optimization-and-model-selection-for-domain-generalization-a-mixup-guided-solution-is-accepted-by-sdm-2024-paper",
          title: 'Our paper “Towards Optimization and Model Selection for Domain Generalization: A Mixup-guided Solution”...',
          description: "",
          section: "News",},{id: "news-our-diversify-algorithm-iclr-23-now-extends-to-virtual-reality-and-the-paper-generating-virtual-reality-interaction-data-from-out-of-distribution-desktop-data-an-exploration-using-stroke-gestures-is-accepted-by-ieee-vr-2024",
          title: 'Our Diversify algorithm (ICLR’23) now extends to virtual reality and the paper “Generating...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-be-an-associate-editor-for-ieee-transactions-on-neural-networks-and-learning-systems-tnnls",
          title: 'I was invited to be an Associate Editor for IEEE Transactions on Neural...',
          description: "",
          section: "News",},{id: "news-our-survey-paper-a-survey-on-evaluation-of-large-language-models-is-accepted-by-acm-tist-paper-website",
          title: 'Our survey paper “A survey on evaluation of large language models” is accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-diversity-a-general-framework-for-time-series-out-of-distribution-detection-and-generalization-is-accepted-by-ieee-transactions-on-pattern-analysis-and-machine-intelligence-tpami-paper",
          title: 'Our paper “Diversity: a general framework for time series out-of-distribution detection and generalization”...',
          description: "",
          section: "News",},{id: "news-we-have-2-papers-accepted-as-spotlight-and-2-as-poster-at-iclr-2024",
          title: 'We have 2 papers accepted as spotlight and 2 as poster at ICLR...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-be-an-area-chair-for-acm-multimedia-2024",
          title: 'I was invited to be an Area Chair for ACM Multimedia 2024.',
          description: "",
          section: "News",},{id: "news-we-have-8-papers-accepted-by-icml-2024-4-from-my-team-and-4-collaborative-work-congrats",
          title: 'We have 8 papers accepted by ICML 2024 (4 from my team and...',
          description: "",
          section: "News",},{id: "news-the-promptbench-framework-has-been-accepted-by-jmlr-open-source-track-negativeprompt-variation-of-emotionprompt-is-accepted-by-ijcai-2024-main-track",
          title: 'The PromptBench framework has been accepted by JMLR open-source track! NegativePrompt (variation of...',
          description: "",
          section: "News",},{id: "news-invited-to-be-an-area-chair-for-neurips-2024-main-track",
          title: 'Invited to be an area chair for NeurIPS 2024 main track.',
          description: "",
          section: "News",},{id: "news-we-have-4-collaborative-papers-accepted-by-acl-2024-2-main-2-findings-congrats-to-authors",
          title: 'We have 4 collaborative papers accepted by ACL 2024 (2 main, 2 findings)....',
          description: "",
          section: "News",},{id: "news-our-paper-specformer-guarding-vision-transformer-robustness-via-maximum-singular-value-penalization-is-accepted-by-eccv-2024-paper",
          title: 'Our paper “SpecFormer: Guarding Vision Transformer Robustness via Maximum Singular Value Penalization” is...',
          description: "",
          section: "News",},{id: "news-invited-to-be-an-area-chair-for-iclr-2025-and-senior-program-member-spc-of-aaai-2025",
          title: 'Invited to be an Area Chair for ICLR 2025 and senior program member...',
          description: "",
          section: "News",},{id: "news-our-vision-paper-on-catastrophic-inheritance-of-large-foundation-models-is-accepted-by-dmlr-arxiv",
          title: 'Our vision paper “On Catastrophic Inheritance of Large Foundation Models” is accepted by...',
          description: "",
          section: "News",},{id: "news-our-new-work-agentreview-exploring-peer-review-dynamics-with-llm-agents-is-accepted-by-emnlp-main-track-paper",
          title: 'Our new work AgentReview: Exploring Peer Review Dynamics with LLM Agents is accepted...',
          description: "",
          section: "News",},{id: "news-we-have-5-papers-accepted-by-neurips-2024-including-a-spotlight-congrats-to-the-students",
          title: 'We have 5 papers accepted by NeurIPS 2024, including a spotlight! Congrats to...',
          description: "",
          section: "News",},{id: "news-we-have-one-collaborative-paper-accepted-by-neurips-24-dataset-and-benchmark-track-as-a-spotlight-paper",
          title: 'We have one collaborative paper accepted by NeurIPS 24 dataset and benchmark track...',
          description: "",
          section: "News",},{id: "news-invited-to-be-an-area-chair-ac-for-icml-2025-and-senior-program-committee-spc-for-ijcai-2025",
          title: 'Invited to be an area chair (AC) for ICML 2025 and senior program...',
          description: "",
          section: "News",},{id: "news-our-work-zoopfl-received-outstand-paper-award-at-neurips-2024-workshop-on-federated-foundation-models",
          title: 'Our work ZooPFL received Outstand Paper Award at NeurIPS 2024 workshop on federated...',
          description: "",
          section: "News",},{id: "news-check-my-first-microsoft-research-podcast-on-our-paper-at-neurips-24-podcast",
          title: 'Check my first Microsoft Research Podcast on our paper at NeurIPS’24: [Podcast]',
          description: "",
          section: "News",},{id: "news-invited-to-be-an-area-chair-for-kdd-2025",
          title: 'Invited to be an Area Chair for KDD 2025.',
          description: "",
          section: "News",},{id: "news-four-papers-are-accepted-in-iclr-2025-congrats-to-all-collaborators",
          title: 'Four papers are accepted in ICLR 2025. Congrats to all collaborators!',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-be-a-grant-reviewer-for-oak-ridge-associated-universities-orau",
          title: 'I was invited to be a grant reviewer for Oak Ridge Associated Universities...',
          description: "",
          section: "News",},{id: "news-i-got-computational-funding-support-from-the-microsoft-accelerate-foundation-model-research-program",
          title: 'I got computational funding support from the Microsoft Accelerate Foundation Model Research program!...',
          description: "",
          section: "News",},{id: "news-invited-to-be-an-area-chair-ac-for-neurips-2025",
          title: 'Invited to be an Area Chair (AC) for NeurIPS 2025.',
          description: "",
          section: "News",},{id: "news-we-have-1-tutorial-and-1-paper-accepted-at-cvpr-2025-congrats",
          title: 'We have 1 tutorial and 1 paper accepted at CVPR 2025. Congrats!',
          description: "",
          section: "News",},{id: "news-our-paper-scito2m-a-2-million-30-year-cross-disciplinary-dataset-for-temporal-scientometric-analysis-got-the-best-paper-award-at-aaai-2025-good-data-workshop-congrats-paper",
          title: 'Our paper “Scito2M: A 2 Million, 30-Year Cross-disciplinary Dataset for Temporal Scientometric Analysis”...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-william-amp-amp-mary-faculty-research-award",
          title: 'I was awarded the William &amp;amp;amp; Mary Faculty Research Award!',
          description: "",
          section: "News",},{id: "news-the-journal-verison-of-noisy-model-learning-got-accepted-by-tpami-congrats-paper",
          title: 'The journal verison of noisy model learning got accepted by TPAMI! Congrats! [Paper]...',
          description: "",
          section: "News",},{id: "news-we-are-organizing-the-international-workshop-on-federated-learning-with-generative-ai-in-conjunction-with-ijcai-2025-fedgenai-ijcai-25",
          title: 'We are organizing the International Workshop on Federated Learning with Generative AI In...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},];
