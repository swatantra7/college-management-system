class TeachersController < InheritedResources::Base
	

  def create
    create! {teachers_path}
  end
  

  def teacher_params
    params.require(:teacher).permit(
      :name
    )
  end

end


