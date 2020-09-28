using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.QrCodeSeatings;
using MDR_Angular.OrderMate.Restaurants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.QrCodes
{
    [AutoMapFrom(typeof(QrCode))]
    [AutoMapTo(typeof(QrCode))]
    public class QrCodeDto: FullAuditedEntityDto<int>
    {
        //public int QrCodeId { get; set; }
        public int? RestaurantIdFk { get; set; }

    }
}
