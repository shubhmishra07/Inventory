package com.hcl.project.entity;

import jakarta.persistence.*;

@Entity
@Table(name ="supplier")
public class Supplier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String companyName;

    @Column
    private String contactPerson;

    @Column
    private String contactEmail;

    @Column
    private int phone;

    public Supplier() {
    }

    public Supplier(Long id, String companyName, String contactPerson, String contactEmail, int phone) {
        this.id = id;
        this.companyName = companyName;
        this.contactPerson = contactPerson;
        this.contactEmail = contactEmail;
        this.phone = phone;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getContactPerson() {
        return contactPerson;
    }

    public void setContactPerson(String contactPerson) {
        this.contactPerson = contactPerson;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }
}
