package br.com.crud.projeto.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.crud.projeto.model.UsuarioModel;
import br.com.crud.projeto.repository.UsuarioRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;




@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/bd")
public class CrudController {
    @Autowired
    UsuarioRepository usuarioRepository;

    @PostMapping("/criar")
    public ResponseEntity<UsuarioModel> criaUsuario(@RequestBody UsuarioModel usuario) {
        UsuarioModel _usuario = usuarioRepository.save(usuario);
        return new ResponseEntity<>(_usuario, HttpStatus.CREATED);
    }
    
    @GetMapping("/listar")
    public ResponseEntity<List<UsuarioModel>> getAllUsuarios(@RequestParam(required = false) String param) {
        List<UsuarioModel> usuarios = usuarioRepository.findAll();
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteUsuario(@PathVariable("id") long id){
        usuarioRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/pegar/{id}")
    public ResponseEntity getUsuario(@PathVariable("id") long id) {
        Optional<UsuarioModel> usuario = usuarioRepository.findById(id);
        return new ResponseEntity<>(usuario, HttpStatus.OK);
    }
    
    @PutMapping("/pegar/{id}")
    public ResponseEntity putUsuario(@PathVariable long id, @RequestBody UsuarioModel usuario) {
        Optional<UsuarioModel> _usuario = usuarioRepository.findById(id);
        UsuarioModel usuarioCopia = _usuario.get();
        usuarioCopia.setNome(usuario.getNome());
        usuarioCopia.setSenha(usuario.getSenha());
        usuarioCopia.setCpf(usuario.getCpf());
        usuarioCopia.setDataNascimento(usuario.getDataNascimento());
        return new ResponseEntity<>(usuarioRepository.save(usuarioCopia), HttpStatus.OK);
    }
} 
    

