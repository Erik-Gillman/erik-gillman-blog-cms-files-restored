package com.example.backend.controllers;

import com.example.backend.Post;
import com.example.backend.services.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping("/post")
public class PostController {
    private final PostService postService;

    public PostController(PostService postService){this.postService = postService;}

    @GetMapping("/all")
    public ResponseEntity<List<Post>> getAllPosts(){
        List<Post> posts = postService.findAllPosts();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @GetMapping("/find/{postId}")
    public ResponseEntity<Post> getPost(@PathVariable("postId") long postId){
        Post post = postService.findPostByPostId(postId);
        if(post == null){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(post, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Post> addPost(@RequestBody Post post){
        Post newPost = postService.addPost(post);
        return new ResponseEntity<>(newPost, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{postId}")
    public ResponseEntity<?> deletePost(@PathVariable("postId") long postId){
        Post post = postService.findPostByPostId(postId);
        if(post != null){
            postService.deletePostByPostId(postId);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
