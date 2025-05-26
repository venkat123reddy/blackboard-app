package com.ucm.blackboard.models;

import lombok.Data;

@Data
public class Contact {
    private String email;
    private String phoneNumber;
    private Address address;
}
