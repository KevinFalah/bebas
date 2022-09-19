package authdto

type RegisterResponse struct {
	Fullname     string `json:"fullname" form:"name" validate:"required"`
	Email    string `json:"email" form:"email" validate:"required"`
	Password string `json:"password" form:"password" validate:"required"`
	Gender   string `json:"gender" gorm:"type: varchar(255)"`
	Phone    string `json:"phone" gorm:"type: varchar(255)"`
	Address  string `json:"address" gorm:"type: varchar(255)"`
	Status   bool   `json:"status" gorm:"type: boolean"`
	Role     string `gorm:"type: varchar(255)" json:"role"`
}

type LoginResponse struct {
	Fullname    string `json:"fullname" form:"name"`
	Email   string `gorm:"type: varchar(255)" json:"email"`
	Token   string `gorm:"type: varchar(255)" json:"token"`
	Gender  string `json:"gender" gorm:"type: varchar(255)"`
	Phone   string `json:"phone" gorm:"type: varchar(255)"`
	Address string `json:"address" gorm:"type: varchar(255)"`
	Role    string `gorm:"type: varchar(255)" json:"role"`
}
