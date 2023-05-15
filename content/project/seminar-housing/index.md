---
# Documentation: https://wowchemy.com/docs/managing-content/
title: "Does Schooling Area matter to the housing price?"
summary: "Adopted the spatial variables into housing price model, using quantile regression to model"
authors: [Chester Chou]
tags: ['Data analysis', 'Empircal Economics Research','Stata','QGIS','GeoDa', 'R']
categories: [Data analysis]
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

### References

1. [分量迴歸在大量估價模型之應用－非典型住宅估價之改進](http://www.realestate.com.tw/duckhouse/paper/114.%E5%88%86%E9%87%8F%E5%9B%9E%E6%AD%B8%E5%9C%A8%E4%BD%8F%E5%AE%85%E5%A4%A7%E9%87%8F%E4%BC%B0%E5%83%B9%E6%A8%A1%E5%9E%8B%E4%B8%AD%E7%9A%84%E5%BB%B6%E4%BC%B8.pdf)
2. [成本法估價偏誤之探討－分量迴歸應用](http://www.realestate.com.tw/duckhouse/paper/131.%E6%88%90%E6%9C%AC%E6%B3%95%E4%BC%B0%E5%83%B9%E5%81%8F%E8%AA%A4%E4%B9%8B%E6%8E%A2%E8%A8%8E.pdf)

[^1]:控制住人口密度、所得、交通等外生變數影響
[^2]:主要分成五個分位數，分別為低價位($10^{th}$ percentile)、中低價位($25^{th}$ percentile)、中價位($50^{th}$ percentile)、中高價位($75^{th}$ percentile)、高價位($90^{th}$ percentile)