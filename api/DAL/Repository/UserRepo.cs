﻿using ADOToolbox;
using DAL.Interface;
using DAL.Models;
using DAL.Tools;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualBasic.CompilerServices;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace DAL.Repository
{
    public class UserRepo : BaseRepository, IUserRepository<User>
    {

        public UserRepo(IConfiguration config) : base(config)
        {
        }

        public bool? CheckUser(User u)
        {

            string Query = "SELECT * FROM [User] WHERE Email = @email AND Password = @pass";
            Command cmd = new Command(Query);
            cmd.AddParameter("email", u.Email);
            cmd.AddParameter("pass", u.Password);

            int Id = 0;


            try
            {
                User a = _connection.ExecuteReader(cmd, Converters.Convert).FirstOrDefault();
                if (a != null)
                {
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw new ArgumentException(e.Message);
            }





            if (Id > 0)
            {
                Command checkActive = new Command("SELECT Id FROM [User] WHERE Id = " + Id + " AND IsActive = 1");


                if ((int)_connection.ExecuteScalar(checkActive) > 0) return true;
                else return false;
            }
            else
            {
                return null;
            }

        }

        public User GetByEmail(string email)
        {
            Command cmd = new Command("SELECT * FROM [User] WHERE Email = @email");
            cmd.AddParameter("email", email);
            return _connection.ExecuteReader(cmd, Converters.Convert).FirstOrDefault();
        }

        public bool Delete(int Id)
        {
            Command cmd = new Command("DELETE FROM [User] WHERE Id = @Id");
            cmd.AddParameter("Id", Id);
            return _connection.ExecuteNonQuery(cmd) == 1;
        }

        public IEnumerable<User> GetAll()
        {
            Command cmd = new Command("SELECT * FROM [User]");
            return _connection.ExecuteReader<User>(cmd, Converters.Convert);
        }

        public User GetOne(int Id)
        {
            Command cmd = new Command("SELECT * FROM [User] WHERE Id = @Id");
            cmd.AddParameter("Id", Id);
            return _connection.ExecuteReader(cmd, Converters.Convert).FirstOrDefault();
        }

        public void Insert(User u)
        {
            string query = "INSERT INTO [User] (Email, Password, FisrtName, LastName, BirthDate) VALUES(@email, @password, @firstName, @lastName, @birthDate)";
            Command cmd = new Command(query);
            cmd.AddParameter("email", u.Email);
            cmd.AddParameter("password", u.Password);
            cmd.AddParameter("firstName", u.FirstName);
            cmd.AddParameter("lastName", u.LastName);
            cmd.AddParameter("birthDate", u.BirthDate);

            _connection.ExecuteNonQuery(cmd);
        }

        public void Update(User u)
        {
            string query = "UPDATE [User] SET Email = @email, Password = @password, FisrtName = @firstName, LastName = @lastName, BirthDate = @birthDate" +
                " WHERE Id = @Id";
            Command cmd = new Command(query);
            cmd.AddParameter("email", u.Email);
            cmd.AddParameter("password", u.Password);
            cmd.AddParameter("firstName", u.FirstName);
            cmd.AddParameter("lastName", u.LastName);
            cmd.AddParameter("birthDate", u.BirthDate);
            cmd.AddParameter("Id", u.Id);

            _connection.ExecuteNonQuery(cmd);
        }

        public void SetAdmin(int Id)
        {
            string Query = "UPDATE [User] SET IsAdmin = @isAdmin WHERE Id = @id";
            Command cmd = new Command(Query);
            cmd.AddParameter("isAdmin", GetOne(Id).IsAdmin ? 0 : 1);
            cmd.AddParameter("Id", Id);
            _connection.ExecuteNonQuery(cmd);
        }
    }
}
