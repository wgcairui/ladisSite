FROM node
# 申明网站名称
ENV NAME = localhost
# 百度统计代码
ENV CODE_HM = https://hm.baidu.com/hm.js?bf546544e2b54542e68aa9a497b752a4
# 显示
ENV SHOW_PRODUCT = 1
ENV SHOW_BUY = 0
ENV SHOW_CASE = 1
ENV SHOW_NEWS = 1
ENV SHOW_LAUNGUA = 0

EXPOSE 80