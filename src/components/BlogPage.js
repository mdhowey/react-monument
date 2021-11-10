import React from 'react'
import '../styles/blog.css'
import BlogArticle from './BlogArticle'
import BlogComment from './BlogComment'
import BlogHeader from './BlogHeader'
import BlogSidebar from './BlogSidebar'
import Footer from './Footer'
import Nav from './Nav'

const BlogPage = () => {
  return(
    <>
      <div class="blog-page">
        <BlogHeader />
        <Nav />
        <div class="wrap grid-wrapper">
          <BlogArticle />
          <BlogSidebar />
        </div>
        <BlogComment />
        <Footer />
      </div>
    </>
  )
}

export default BlogPage
