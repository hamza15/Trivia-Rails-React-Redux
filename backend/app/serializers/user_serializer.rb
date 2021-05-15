class UserSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :username, :animals_score, :celebrities_score, :sports_score, :created_at, :updated_at
  end