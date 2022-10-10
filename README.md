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
      
      
      
저녁에 다시 도전하여 해결, 스프링에서 WebMvcConfigurer(config 파일)로 해결
       
                 package net.javaguides.springboot.config;

          import org.springframework.context.annotation.Configuration;
          import org.springframework.web.servlet.config.annotation.CorsRegistry;
          import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

          @Configuration
          public class WebConfig implements WebMvcConfigurer{

            public static final String ALLOWED_METHOD_NAMES = "GET,HEAD,POST,PUT,DELETE,TRACE,OPTIONS,PATCH";

              @Override
              public void addCorsMappings(final CorsRegistry registry) {
                  registry.addMapping("/**")
                          .allowedMethods(ALLOWED_METHOD_NAMES.split(","));
              }

          }
해결
