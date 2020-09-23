﻿using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Restaurants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantImages
{
    [AutoMapFrom(typeof(RestaurantImage))]
    [AutoMapTo(typeof(RestaurantImage))]
    public class RestaurantImageCandUDto
    {
       // public int RestaurantImageId { get; set; }
        public string ImageDescription { get; set; }
        public byte[] ImageFile { get; set; }
        public int? RestaurantIdFk { get; set; }

        
    }
}