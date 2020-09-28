using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Seatings
{
    public interface ISeatingAppService: IAsyncCrudAppService<SeatingDto>
    {
    }
}
