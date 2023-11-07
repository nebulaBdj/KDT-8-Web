package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import  java.util.ArrayList;
import java.util.Arrays;


@Controller
public class AppController {
    @GetMapping("/people")
    public String getHi(Model model){
        ArrayList<String[]> people = new ArrayList<>();
        people.add(new String[]{"kim", "10"});
        people.add(new String[]{"jang", "11"});
        people.add(new String[]{"ju", "23"});
        people.add(new String[]{"lee", "89"});

        model.addAttribute("people", people);
        return  "app";//여기서의 리턴값은 html의 이름이어야한다.
    }
}
