package com.example.springsecurityLoginAndRegisterReact.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "teachers")
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user;

    @Column(unique = true, nullable = false, length = 40)
    private String email;

    @Column(nullable = false, length = 10)
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    public Teacher(String email, String password, Role role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
