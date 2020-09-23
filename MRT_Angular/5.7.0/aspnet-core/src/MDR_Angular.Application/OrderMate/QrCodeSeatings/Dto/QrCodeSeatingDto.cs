using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Orders;
using MDR_Angular.OrderMate.QrCodes;
using MDR_Angular.OrderMate.Seatings;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.QrCodeSeatings
{
    [AutoMapFrom(typeof(QrCodeSeating))]
    [AutoMapTo(typeof(QrCodeSeating))]
    public class QrCodeSeatingDto: EntityDto<int>
    {
        //public int QrCodeSeatingId { get; set; }
        public int NrOfPeople { get; set; }
        public int QrCodeIdFk { get; set; }
        public int SeatingIdFk { get; set; }
        public int? OrderIdFk { get; set; }

        
    }
}
