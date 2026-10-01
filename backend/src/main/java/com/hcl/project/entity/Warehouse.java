package com.hcl.project.entity;


import jakarta.persistence.*;

@Entity
@Table(name="warehouse")
public class Warehouse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String facilityName;

    @Column
    private String contactPerson;

    @Column
    private String contactEmail;

    @Column
    private String phone;

    public Warehouse() {
    }

    public Warehouse(Long id, String facilityName, String contactPerson, String contactEmail, String phone) {
        this.id = id;
        this.facilityName = facilityName;
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

    public String getFacilityName() {
        return facilityName;
    }

    public void setFacilityName(String facilityName) {
        this.facilityName = facilityName;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
