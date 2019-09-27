# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models

  serialize :liked_friends, Array

  def self.random_friend(ids)
    ids = ids.empty? ? [0] : ids
    Friend.where("id NOT IN (?)", ids).order("RANDOM()")   #.limit("4")
  end

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Friend.where("id IN (?)", ids)
  end
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User


end
