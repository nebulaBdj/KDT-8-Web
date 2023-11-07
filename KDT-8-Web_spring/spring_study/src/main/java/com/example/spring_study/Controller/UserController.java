package com.example.spring_study.Controller;

import com.example.spring_study.Domain.User;
import com.example.spring_study.dto.UserDTO;
import com.example.spring_study.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
@Controller
public class UserController {
    //도메인 만들고 > dto 만들고 > mapper > service > controller
    @Autowired
    UserService userService;

    @GetMapping("/")
    public String getUsers(Model model){
        List<UserDTO> users = userService.getUserList();
        //마이바티스를 통해 전달된 정보를 받아와 users에 넣고
        model.addAttribute("list", users);
        //템플릿으로 값을 전달하는 model에 담아 전달한다.
        return "user";
    }

    @GetMapping("user")
    public String getUserInsert(@RequestParam String name, @RequestParam String nickname){
        User user = new User();
        user.setName(name);
        user.setNickname(nickname);

        userService.insertUser(user);
        return "user";
    }
}
