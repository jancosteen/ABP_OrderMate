﻿using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.AdvertisementPrices.Dto
{
    [AutoMapFrom(typeof(AdvertisementPrice))]
    [AutoMapTo(typeof(AdvertisementPrice))]
    public class AdvertisementPriceCandUDto
    {
        public double AdvertismentPrice { get; set; }
        public DateTime AdvertisementPriceDateUpdated { get; set; }
    }
}
