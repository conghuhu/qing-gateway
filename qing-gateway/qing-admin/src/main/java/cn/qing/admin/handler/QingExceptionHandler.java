/*
 * Copyright 2023 qing-gateway
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package cn.qing.admin.handler;

import cn.qing.common.exception.QingException;
import cn.qing.admin.pojo.vo.Result;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;

/**
 * @author conghuhu
 * @create 2022-04-12 9:14
 */
@RestControllerAdvice
public class QingExceptionHandler {

    @ExceptionHandler(Exception.class)
    public Result<?> handlerBusinessException(Exception exception) {
        QingException qingException = transferToQingException(exception);
        return Result.error(qingException.getCode(), qingException.getErrMsg());
    }

    private QingException transferToQingException(Exception exception) {
        QingException qingException;
        if (exception instanceof QingException) {
            qingException = (QingException) exception;
        } else if (exception instanceof BindException) {
            BindException bindException = (BindException) exception;
            BindingResult bindingResult = bindException.getBindingResult();
            qingException = new QingException(getErrorMsg(bindingResult));
        } else if (exception instanceof MethodArgumentNotValidException) {
            MethodArgumentNotValidException methodArgumentNotValidException = (MethodArgumentNotValidException) exception;
            BindingResult bindingResult = methodArgumentNotValidException.getBindingResult();
            qingException = new QingException(getErrorMsg(bindingResult));
        } else {
            qingException = new QingException(exception.getMessage());
        }
        return qingException;
    }


    private String getErrorMsg(BindingResult bindingResult) {
        List<FieldError> fieldErrors = bindingResult.getFieldErrors();
        StringBuilder sb = new StringBuilder();
        fieldErrors.forEach(fieldError -> {
            sb.append(fieldError.getDefaultMessage());
            sb.append("-");
        });
        return sb.toString();
    }
}
