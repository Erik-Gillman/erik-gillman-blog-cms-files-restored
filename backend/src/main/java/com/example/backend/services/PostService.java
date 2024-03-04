package com.example.backend.services;

import com.example.backend.Post;
import com.example.backend.repos.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private final PostRepo postRepo;

    @Autowired
    PostService(PostRepo postRepo){this.postRepo = postRepo;}

    public Post addPost(Post post){return postRepo.save(post);}

    public Post findPostByPostId(long postId){return postRepo.findPostByPostId(postId);}

    public List<Post> findAllPosts(){return postRepo.findAll();}

    public void deletePostByPostId(long postId){postRepo.deletePostByPostId(postId);}


}
