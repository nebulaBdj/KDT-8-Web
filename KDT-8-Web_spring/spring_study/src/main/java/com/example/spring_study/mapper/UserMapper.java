package com.example.spring_study.mapper;

import com.example.spring_study.Domain.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface UserMapper {
    //mapper를 참고해서
    List<User> retrieveAll();

    //mapper 파일(xml 파일)을 참고하지 않고 sql을 실행
    @Insert("insert into user(name, nickname) values(#{name},#{nickname})")
    void insertUser(User user);
}
