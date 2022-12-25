package com.pruebasp.prueba.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pruebasp.prueba.models.UsuarioModel;
import com.pruebasp.prueba.repositories.UsuarioRepository;





@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

   

    public ArrayList<UsuarioModel> getUsuarios(){
        
        return (ArrayList<UsuarioModel>)usuarioRepository.findAll();
        
    }

    public UsuarioModel saveUsuario(UsuarioModel usuario){

        return usuarioRepository.save(usuario);

    }

    public UsuarioModel updateUsuario(UsuarioModel usuario){

        return usuarioRepository.save(usuario);
        
    }

    public Optional<UsuarioModel> ObtenerPorId(Long id){
        return usuarioRepository.findById(id);
    }

    public boolean eliminarUsuario(Long id){
        try {
            usuarioRepository.deleteById(id);
            return true;
        } catch (Exception err) {
            return false;            
        }
    }

    
    
}
