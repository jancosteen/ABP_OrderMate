using System.Threading.Tasks;
using Abp.Application.Services;
using MDR_Angular.Authorization.Accounts.Dto;

namespace MDR_Angular.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
