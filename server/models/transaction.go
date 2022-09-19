package models

type Transaction struct {
	ID        int          `json:"id" gorm:"primary_key:auto_increment"`
	StartDate string       `json:"startdate" form:"startdate" gorm:"type: varchar(255)"`
	DueDate   string       `json:"duedate" form:"duedate" gorm:"type: varchar(255)"`
	UserID    int          `json:"user_id" form:"user_id"`
	User      UserResponse `json:"user"`
	Attache   string       `json:"attache" form:"attache" gorm:"type: varchar(255)"`
	Status    bool         `json:"status" gorm:"type:text" form:"status"`
}

type TransactionResponse struct {
	ID        int          `json:"id"`
	StartDate string       `json:"startdate"`
	DueDate   string       `json:"duedate"`
	UserID    int          `json:"user_id"`
	User      UserResponse `json:"user"`
	Attache   string       `json:"attache"`
	Status    bool         `json:"status"`
}

type UserResponse struct {
	ID        int    `json:"id"`
	Name      string `json:"name" form:"name" validate:"required"`
	Email     string `json:"email" form:"email" validate:"required"`
	Password  string `json:"password" form:"password" validate:"required"`
	Gender    string `json:"gender" form:"gender" validate:"required"`
	Phone     int    `json:"phone" form:"phone"`
	Address   string `json:"address" form:"address"`
	Subscribe string `json:"subscribe" form:"subscribe"`
	Status    string `json:"status" form:"status"`
}

func (UserResponse) TableName() string {
	return "users"
}
