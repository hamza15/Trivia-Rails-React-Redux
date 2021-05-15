class CategorySerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :name, :questions
  end