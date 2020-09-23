using System.Threading.Tasks;
using MDR_Angular.Configuration.Dto;

namespace MDR_Angular.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
