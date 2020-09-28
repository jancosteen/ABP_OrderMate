using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.ReservationStatusses
{
    public interface IReservationStatusAppService: IAsyncCrudAppService<ReservationStatusDto>
    {
    }
}
