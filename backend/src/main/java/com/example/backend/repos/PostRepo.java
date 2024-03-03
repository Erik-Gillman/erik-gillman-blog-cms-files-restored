package com.example.backend.repos;

import com.example.backend.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepo extends JpaRepository<Post, Long> {
    Post findPostByPostId(long postId);

    void deletePostByPostId(long postId);
}
