class QuestionSerializer
    include FastJsonapi::ObjectSerializer
    attributes :question, :choice1, :answer, :category_id, :category_name
  end