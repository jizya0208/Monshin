class AnswersController < ApplicationController
  def new
    @answer = Answer.new
  end
  
  def create
    @answer = Answer
    if @answer.save
      flash[:notice] = 'ご回答ありがとうございました'
      redirect_to answers_path 
    end
  end
end