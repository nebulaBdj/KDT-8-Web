package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.vo.UserVO;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class APIController {
    @GetMapping("/request")
    public String main(){
        return "request";
    }
    @GetMapping("/get/response1")
    public String getRes(@RequestParam(value="name", required = true) String n, Model model){//n에 name에 있는 값을 넣어준다.
        model.addAttribute("name", n);
        return "response";
    }

    @GetMapping("/get/response2")
    public String getRes2(@RequestParam(value="name", required = false) String n, Model model){//n에 name에 있는 값을 넣어준다.
        model.addAttribute("name", n);
        return "response";
    }

    @GetMapping("/get/response3/{name}/{age}")
    //객체 안에 넣어 두 개 이상의 url을 받을 수 있음 이렇게 할려면 두번째 변수인 age는 false값이어야한다.
    public  String getRes3(@PathVariable String name, @PathVariable String age, Model model){//주소의 값을 가져오기
        //required 설정을 안해놓으면 기본값이 true이다.
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }

    @GetMapping({"/get/response4/{name}/{age}", "/get/response4/{name}"})
    //객체 안에 넣어 두 개 이상의 url을 받을 수 있음 이렇게 할려면 두번째 변수인 age는 false값이어야한다.
    public  String getRes4(@PathVariable String name, @PathVariable(value = "age", required = false) String abc, Model model){//주소의 값을 가져오기
        //required 설정을 안해놓으면 기본값이 true이다.
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }

    @PostMapping("/post/response1")
    public String postRes1(@RequestParam(required = true) String name, Model model){
        //post를 form으로 보낼때 requset를 Param으로 받는다.
        //body가 안되는 이유는 무엇일까?
        //RequestBody: 클라이언트가 전달한 json 형태의 내용을 JSON Object로 연결해준다.
        model.addAttribute("name", name);
        return "response";
    }

    @PostMapping("/post/response2")
    public String postRes2(@RequestParam(required = false) String name, Model model){
        //post를 form으로 보낼때 requset를 Param으로 받는다.
        //body가 안되는 이유는 무엇일까?
        //RequestBody: 클라이언트가 전달한 json 형태의 내용을 JSON Object로 연결해준다.
        model.addAttribute("name", name);
        return "response";
    }

    //ResponseBody : api 쓸 때 사용하는 친구 => template 호출하는게 아니라 값을 전달
    @PostMapping("/post/response3")
    @ResponseBody
    public String postRes3(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }
///////////////////////////////////////////////////////////실습/////////////////////////////////
    @GetMapping("/introduce/{name}")
    public String getIntro(@PathVariable String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }

    @GetMapping("/introduce2")
    public String getIntro2(@RequestParam(value = "name") String name, @RequestParam(value = "age") String n, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", n);
        return "response";
    }

    @PostMapping("/post/profile")
    public String post(@RequestParam String name, @RequestParam String gender, @RequestParam String Y2002, @RequestParam String D7, @RequestParam String M5, @RequestParam String fav, Model model){
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("year", Y2002);
        model.addAttribute("mounth", M5);
        model.addAttribute("day", D7);
        model.addAttribute("fav", fav);
        return "response";
    }

    //////////////////////////////////////////////////실습/////////////////////////

    @PostMapping("/dto/response1")
    @ResponseBody
    public String dto1(@ModelAttribute UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }
    //일반 폼 GET 방식 : DTO(@ModelAttribute) 전송 가능
    //일반 폼 GET 방식 : DTO(@RequestBody) 오류

    @PostMapping("/dto/response2")
    @ResponseBody
    public String dto2(UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }

    @PostMapping("/dto/response3")
    @ResponseBody
    public String dto3(@RequestBody UserDTO userDTO){
        //@RequestBody json 혹은 xml 데이터 형식을 읽는데, form 전송으로 오는 데이터는 형식이 다르기 때문에 못받는다.
        //일반 폼 기본값 x-www-form-urlencoded
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }

    @GetMapping("/vd/response1")
    @ResponseBody
    public String vo1(UserVO uservo){
        String msg = uservo.getName() + " " + uservo.getAge() + "!!!";
        return msg;
    }
    //모델 어트리뷰트는 셋함수를 통해 값을 맵핑시키기 때문에 셋함수가 없으면 값이 들어가지 않는다.
}
