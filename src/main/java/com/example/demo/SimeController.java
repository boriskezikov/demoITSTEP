package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hello")
public class SimeController {

  @PostMapping
  public String printMyString(@RequestBody String param) {
    String resp = "This is front message incoming: ";
    return resp + param;
  }
}
