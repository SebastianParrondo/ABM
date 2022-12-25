package com.pruebasp.prueba.models;

import jakarta.persistence.*;

@Entity
@Table(name = "usuario")
public class UsuarioModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    
    private String nombre;
    private String apellido;
    private String email;
    private String direccion;
    private Long telefono;

    public void setId(Long id){
        this.id = id;
    }
    public Long getId(){
        return id;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public String getNombre(){
        return nombre;
    }

    public void setApellido(String apellido){
        this.apellido = apellido;
    }
    public String getApellido(){
        return apellido;
    }

    public void setEmail(String email){
        this.email = email;
    }
    public String getEmail(){
        return email;
    }

    public void setDireccion(String direccion){
        this.direccion = direccion;
    }
    public String getDireccion(){
        return direccion;
    }

    public void setTelefono(Long telefono){
        this.telefono = telefono;
    }
    public Long getTelefono(){
        return telefono;
    }
}
