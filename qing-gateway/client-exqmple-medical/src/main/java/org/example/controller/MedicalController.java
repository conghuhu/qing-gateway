package org.example.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/medical")
public class MedicalController {

    @GetMapping("/getMedical")
    public ResponseEntity<?> getMedical() {
        return ResponseEntity.ok("getMedical success");
    }

    @PostMapping("/setMedical")
    public ResponseEntity<?> setMedical() {
        return ResponseEntity.ok("setMedical success");
    }
}
