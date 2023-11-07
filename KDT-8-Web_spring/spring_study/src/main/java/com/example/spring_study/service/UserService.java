package com.example.spring_study.service;


import com.example.spring_study.Domain.User;
import com.example.spring_study.dto.UserDTO;
import com.example.spring_study.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;

    public List<UserDTO> getUserList(){
        List<User> result = userMapper.retrieveAll();
        List<UserDTO> users = new ArrayList<UserDTO>();

        for(int i=0; i<result.size(); i++){
            UserDTO user = new UserDTO();

            user.setId(result.get(i).getId());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(result.get(i).getId() + 100);

            users.add(user);
        }
        return users;
    }

    public void insertUser(User user){
        userMapper.insertUser(user);
    }
}
