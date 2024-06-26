package com.example.BackEnd.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order implements Comparable<Order> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private LocalDateTime startDate;
    @Column(nullable = false)
    private LocalDateTime deliveryDate;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private int totalAmount;
    @Column(nullable = false)
    private float totalCost;
    @Column(nullable = false)
    private String status;
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<OrderItem> orderItems = new ArrayList<>();
    private LocalDateTime pay_at;
    @Override
    public int compareTo(Order o) {
        return this.getId().compareTo(o.getId());
    }
}
