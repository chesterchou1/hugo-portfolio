---
# Documentation: https://wowchemy.com/docs/managing-content/
title: "Does Schooling Area matter to the housing price?"
summary: "Adopted the spatial variables into housing price model, using quantile regression to model"
authors: [Chester Chou]
tags: ['Data analysis', 'Empircal Economics Research','Stata','QGIS','GeoDa', 'R']
categories: [Slide decks]
date: 2023-05-09T23:30:44+08:00

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: featured.png
  focal_point: "Smart"
  preview_only: true


# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

### **Overview**


![](./image/p1.png)


### Findings

1. 以OLS模型[^1]得出，平均而言，整體學區對所有價位房價均產生顯著正向影響，其中總量管制學區效果優於空間管制學區；
2. 以分量模型得出[^2]，觀察到總量管制學區效果與房價呈負相關，有隨房屋價增加而效果遞減的傾向；
3. 以分量模型得出，空間管制學區整體約呈現倒V型，隨價位增加時，空間管制學區效果遞增，直到中價位時開始遞減



[^1]:控制住人口密度、所得、交通等外生變數影響
[^2]:主要分成五個分位數，分別為低價位($10^{th}$ percentile)、中低價位($25^{th}$ percentile)、中價位($50^{th}$ percentile)、中高價位($75^{th}$ percentile)、高價位($90^{th}$ percentile)