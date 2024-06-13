package br.com.crud.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.crud.projeto.model.UsuarioModel;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long>{
    
}
