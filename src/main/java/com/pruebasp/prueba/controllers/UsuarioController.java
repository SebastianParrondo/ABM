package com.pruebasp.prueba.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pruebasp.prueba.models.UsuarioModel;
import com.pruebasp.prueba.services.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @GetMapping()
    public ArrayList<UsuarioModel> obtenerUsuarios(){

        return usuarioService.getUsuarios();

    }
    
    @PostMapping()
    public UsuarioModel guardarUsuario(@RequestBody UsuarioModel usuariomodel){
        return usuarioService.saveUsuario(usuariomodel);
    }

    @PutMapping()
    public UsuarioModel editarUsuario(@RequestBody UsuarioModel usuariomodel){
        return usuarioService.updateUsuario(usuariomodel);
    }

    @GetMapping(path = "/{id}")
    public Optional<UsuarioModel> ObtenerUsuarioPorId(@PathVariable("id") Long id){
        return this.usuarioService.ObtenerPorId(id);
    }

    @DeleteMapping(path = "{id}")
    public String eliminarUsuario(@PathVariable("id") long id){
       
        boolean ok = this.usuarioService.eliminarUsuario(id);

        if(ok){
            return "Se elimino el usuario con id " + id;
        }else{
            return "No pudo eliminar el usuario con id " + id;
        }
    }
        
    

    
}
