﻿using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.UserComments;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.StarRatings
{
    [AutoMapFrom(typeof(StarRating))]
    [AutoMapTo(typeof(StarRating))]
    public class StarRatingCandUDto
    {
        //public int StarRatingId { get; set; }
        public int StarRatingValue { get; set; }

       
    }
}
