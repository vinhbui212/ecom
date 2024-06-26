package com.example.BackEnd.Controllers;
import com.example.BackEnd.DTO.AuthenticationResponse;
import com.example.BackEnd.Services.GmailAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/googleAuth")
@CrossOrigin(origins = "http://localhost:3000/")
@RequiredArgsConstructor
public class GmailController {
    private final GmailAuthService service;
    @PostMapping("/googleRegister")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody Map<String, String> payload) {
        String token = payload.get("token");
        return ResponseEntity.ok(service.googleRegister(token));
    }
}
