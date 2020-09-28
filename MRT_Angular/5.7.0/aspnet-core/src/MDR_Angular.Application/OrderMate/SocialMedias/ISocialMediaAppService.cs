using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.SocialMedias
{
    public interface ISocialMediaAppService: IAsyncCrudAppService<SocialMediaDto>
    {
    }
}
