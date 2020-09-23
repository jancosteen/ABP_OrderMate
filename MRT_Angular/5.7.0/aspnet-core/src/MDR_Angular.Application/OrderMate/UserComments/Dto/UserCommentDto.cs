using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Restaurants;
using MDR_Angular.OrderMate.StarRatings;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.UserComments
{
    [AutoMapFrom(typeof(UserComment))]
    [AutoMapTo(typeof(UserComment))]
    public class UserCommentDto: EntityDto<int>
    {
       // public int UserCommentId { get; set; }
        public string UserComment1 { get; set; }
        public DateTime UserCommentDateCreated { get; set; }
        public int? RestaurantIdFk { get; set; }
        public int? StarRatingIdFk { get; set; }

        
    }
}
