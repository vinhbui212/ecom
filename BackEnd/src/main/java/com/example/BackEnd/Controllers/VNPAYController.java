package com.example.BackEnd.Controllers;


import com.example.BackEnd.Services.VNPayService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@org.springframework.stereotype.Controller
@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "http://localhost:3000/")

public class VNPAYController {
    @Autowired
    private VNPayService vnPayService;



    @PostMapping("/submitOrder")
    public String submidOrder(@RequestParam("id") Long orderId,
                            HttpServletRequest request){
        String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();
        String vnpayUrl = vnPayService.createOrder(orderId, baseUrl);
        return "redirect:" + vnpayUrl;
    }

    @GetMapping("/vnpay-payment")
    public String vnpayPayment(HttpServletRequest request,Model model) {
        int paymentStatus = vnPayService.orderReturn(request);

        String orderInfo = request.getParameter("vnp_OrderInfo");
        String paymentTime = request.getParameter("vnp_PayDate");
        String transactionId = request.getParameter("vnp_TransactionNo");
        String totalPrice = request.getParameter("vnp_Amount");

        model.addAttribute("orderId", orderInfo);
        model.addAttribute("totalPrice", totalPrice);
        model.addAttribute("paymentTime", paymentTime);
        model.addAttribute("transactionId", transactionId);

        return paymentStatus == 1 ? "vnpay/ordersuccess" : "vnpay/orderfail";
    }
}
