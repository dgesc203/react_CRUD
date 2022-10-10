# react_demo

10/10일
  CUR 부분 진행
    1. 이슈 CORS
      -스프링에선 @crossorigin으로 db에 직접 추가가 가능하나, 리액트에서 cors 해결하지 않아, update가 진행되지 않음.
      해결 시도
        1. pacage.jspn에 스프링 host명 기입 -> 실패 + 추후 서버에 올릴 시에 진행 안된다고 해서 빠른 포기
        2. proxy-middleware 설치 후 setupProxy에 코드 작성
          
                        const { createProxyMiddleware } = require("http-proxy-middleware");

                        module.exports = function (app) {
                          app.use(
                            createProxyMiddleware("/api/v1", {
                              target: "http://localhost:8081",
                              changeOrigin: true,
                            })
                          );
                        };
       -> 이것도 진행되지 않음, 추후 해결할 경우 해결책 기입 요망
