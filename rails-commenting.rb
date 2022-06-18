# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
  # this creates controllers for what happens within the view show all the things. This is our API
class BlogPostsController < ApplicationController
  def index
    # ---2)
      # this takes all the data you created and puts it in a single array of info
    @posts = BlogPost.all
  end

  # ---3)
    # this method shows one thing and links to the get in http verbs
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
    # this allows us to use a form to edit something in the view and it links to get as well since we are getting a form.
    @post = BlogPost.new
  end

  def create
    # ---5)
      #this part allows us to grab the db table and add new content to it. A new id. This links with  get create and patch since we are adding and changing. The if is there if it passes well and to go to the new post, and if not then to stay in the spot you are in to create a post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
      # this corilates with the new part of the RESTFUL routes. This is the actual form that we can type on. uses get.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
      # thsi is the part that shows once we update anything in an id. this links with patch. If you are trying to change a key name in an id, you use the update to change the value.  The if decides if it's good or if it takes you back to the same page.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
        # if the destroy method doesn't work, then we get redirected back to the same page we were using to try and destroy the id. If it succeeds then we will se theid we destrooyed, and then we cwill be redirected to the main path.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
    # this makes the method we are using a private and unchangable.
  private
  def blog_post_params
    # ---10)
      # this is requiring that when wanting to update, destroy, or edit an id, we will have to be within the app and it only permists us to change the keys we allow it to. So in this case we can only change the title and the content.
    params.require(:blog_post).permit(:title, :content)
  end
end
