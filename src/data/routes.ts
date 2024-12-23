// The complete routes data you provided goes here
export const routesData = `Client -> Api Gateway: AccountsController/updatePersonalDetails
Api Gateway -> AddressLookup: POST /validate

Client -> Api Gateway: AccountsController/updatePersonalDetails
Api Gateway -> AccountsApi: PUT /accounts/{playerId}/update-personal-details
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePersonalDetails)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePersonalDetails)
AccountsApi -> ExperianRest: POST /decisionanalytics/crosscore/npn2v5vayk5t/services/v0/applications/3 (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePersonalDetails)
AccountsApi -> ScientificGamesService: PUT /profile/players/{playerId}/validation-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePersonalDetails)
AccountsApi -> ScientificGamesPlayer: PUT /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePersonalDetails)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePersonalDetails)
AccountsApi -> ScientificGamesPlayer: PUT /profile/players/{playerId}/addresses/home (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePersonalDetails)

Client -> Api Gateway: AccountsController/updatePersonalDetails
Api Gateway -> AccountsApi: POST /accounts/verifications
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePersonalDetails)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePersonalDetails)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePersonalDetails)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePersonalDetails)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePersonalDetails)
AccountsApi -> ScientificGamesService: GET /exclusions/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePersonalDetails)
AccountsApi -> ScientificGames: POST /login (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePersonalDetails)

Client -> Api Gateway: AccountsController/updateAccount
Api Gateway -> AddressLookup: POST /validate

Client -> Api Gateway: AccountsController/updateAccount
Api Gateway -> AccountsApi: PUT /accounts/{playerId}
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccount)
AccountsApi -> ScientificGamesPlayer: PUT /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccount)
AccountsApi -> ScientificGamesService: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccount)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccount)
AccountsApi -> ScientificGamesPlayer: PUT /profile/players/{playerId}/addresses/home (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccount)
AccountsApi -> ScientificGamesPlayer: DELETE /profile/players/{playerId}/phones/{type} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccount)
AccountsApi -> ScientificGamesPlayer: PUT /profile/players/{playerId}/phones/{type} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccount)
AccountsApi -> ScientificGamesPlayer: POST /profile/players/{playerId}/know-your-customer (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccount)
AccountsApi -> SalesforceRest: POST /hub/v1/dataevents/key:{appKey}/rowset (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccount)
AccountsApi -> SalesforceRest: GET /data/v1/customobjectdata/key/{appKey}/rowset/?$filter=Player_ID='{playerId}' (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccount)

Client -> Api Gateway: AddressController/formatAddress
Api Gateway -> AddressLookup: GET /{globalAddressId}

Client -> Api Gateway: AddressController/searchAddresses
Api Gateway -> AddressLookup: POST /

Client -> Api Gateway: InstantWinGameController/getInstantWinGame
Api Gateway -> InstantWinGame: GET /{gameId}/details

Client -> Api Gateway: PaymentsController/updatePaymentMethod
Api Gateway -> InstantWinGame: GET /unfinished

Client -> Api Gateway: PaymentsController/updatePaymentMethod
Api Gateway -> PlayerBalance: GET /{playerId}

Client -> Api Gateway: PaymentsController/updatePaymentMethod
Api Gateway -> Payments: PUT /payment-methods/{playerId}
Payments -> ScientificGamesPlayer: POST /players/{playerId}/creditCards (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/updatePaymentMethod)

Client -> Api Gateway: PaymentsController/updatePaymentMethod
Api Gateway -> TransactionHistory: GET /transactions/{playerId}

Client -> Api Gateway: InstantWinGameController/getUnfinishedGame
Api Gateway -> InstantWinGame: GET /unfinished

Client -> Api Gateway: InstantWinGameController/loadInstantWinGame
Api Gateway -> InstantWinGame: GET /{gameId}/load/{playMode}

Client -> Api Gateway: InstantWinGameController/validateIwgWager
Api Gateway -> InstantWinGame: GET /{gameId}/validate-access

Client -> Api Gateway: InstantWinGameController/validateIwgWager
Api Gateway -> LimitsApi: POST /wager/{playerId}/validate

Client -> Api Gateway: InstantWinGameController/getIwgStoreStatus
Api Gateway -> InstantWinGame: GET /store-status

Client -> Api Gateway: ReferenceDataController/getTermsAndConditions
Api Gateway -> ReferenceApi: GET /terms-and-conditions

Client -> Api Gateway: DrawGameController/submitTicket
Api Gateway -> ConfigurationApi: GET /feature-toggles

Client -> Api Gateway: DrawGameController/submitTicket
Api Gateway -> ConfigurationApi: GET /business-config

Client -> Api Gateway: DrawGameController/submitTicket
Api Gateway -> GamesHistoryApi: GET /game-history/{playerId}

Client -> Api Gateway: DrawGameController/submitTicket
Api Gateway -> DrawGamePlay: POST /tickets/{playerId}
DrawGamePlay -> SG DrawGame: GET /rcs-dge-draw/v1/draw-masterdata/games/{gameId} (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/submitTicket)
DrawGamePlay -> SG DrawGame: POST /rcs-dge-wager-dfe/v1/wagers (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/submitTicket)

Client -> Api Gateway: DrawGameController/getGameData
Api Gateway -> ConfigurationApi: GET /feature-toggles

Client -> Api Gateway: DrawGameController/getGameData
Api Gateway -> ConfigurationApi: GET /business-config

Client -> Api Gateway: DrawGameController/getGameData
Api Gateway -> DrawGamePlay: GET /games/{gameId}
DrawGamePlay -> SG DrawGame: GET /rcs-dge-cache/v1/game-masterdata/games/{gameId} (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getGameData)
DrawGamePlay -> SG DrawGame: GET /rcs-dge-draw/v1/draw-masterdata/games/{gameId} (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getGameData)

Client -> Api Gateway: ReferenceDataController/getFeatureToggles
Api Gateway -> ConfigurationApi: GET /feature-toggles

Client -> Api Gateway: ReferenceDataController/getLimitOptions
Api Gateway -> ConfigurationApi: GET /limit-options

Client -> Api Gateway: DrawGameController/winChecker
Api Gateway -> ConfigurationApi: GET /feature-toggles/{toggle}

Client -> Api Gateway: DrawGameController/winChecker
Api Gateway -> DrawGameResults: GET /tickets/win-checker
DrawGameResults -> TicketHistory: GET /wager-history-api/v1/wagers (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/winChecker)

Client -> Api Gateway: AccountsController/signIn
Api Gateway -> ConfigurationApi: GET /feature-toggles/{toggle}

Client -> Api Gateway: AccountsController/signIn
Api Gateway -> ConfigurationApi: GET /business-config

Client -> Api Gateway: AccountsController/signIn
Api Gateway -> AccountsApi: POST /accounts/sign-in
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/signIn)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/signIn)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/signIn)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/signIn)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/signIn)
AccountsApi -> ScientificGamesService: GET /exclusions/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/signIn)
AccountsApi -> ScientificGames: POST /login (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/signIn)

Client -> Api Gateway: AccountsController/createAccount
Api Gateway -> ConfigurationApi: GET /feature-toggles/{toggle}

Client -> Api Gateway: AccountsController/createAccount
Api Gateway -> ConfigurationApi: GET /business-config

Client -> Api Gateway: AccountsController/createAccount
Api Gateway -> AccountsApi: POST /accounts
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/createAccount)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/createAccount)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/createAccount)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/createAccount)
AccountsApi -> ScientificGamesService: POST /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/createAccount)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/createAccount)
AccountsApi -> ScientificGamesService: GET /exclusions/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/createAccount)
AccountsApi -> ScientificGames: POST /login (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/createAccount)

Client -> Api Gateway: ReferenceDataController/getOperationalToggle
Api Gateway -> ConfigurationApi: GET /feature-toggles/{toggle}

Client -> Api Gateway: PaymentsController/getTransactions
Api Gateway -> ConfigurationApi: GET /business-config

Client -> Api Gateway: PaymentsController/getTransactions
Api Gateway -> DrawGameResults: GET /tickets/purchase-confirmation
DrawGameResults -> TicketHistory: GET /wager-history-api/v1/wagers (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/getTransactions)

Client -> Api Gateway: PaymentsController/getTransactions
Api Gateway -> TransactionHistory: GET /transactions/{playerId}/funding

Client -> Api Gateway: PaymentsController/getTransactions
Api Gateway -> Payments: GET /payment-methods/{playerId}
Payments -> ScientificGamesPlayer: GET /players/{playerId}/payment-methods (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/getTransactions)

Client -> Api Gateway: PaymentsController/getTransactions
Api Gateway -> TransactionHistory: GET /transactions/{playerId}

Client -> Api Gateway: PaymentsController/addPlayslipToSubscription
Api Gateway -> ConfigurationApi: GET /business-config

Client -> Api Gateway: PaymentsController/addPlayslipToSubscription
Api Gateway -> Payments: PUT {playerId}/subscriptions/{subscriptionType}/playslips

Client -> Api Gateway: PaymentsController/createSubscription
Api Gateway -> ConfigurationApi: GET /business-config

Client -> Api Gateway: PaymentsController/createSubscription
Api Gateway -> Payments: POST /{playerId}/subscriptions
Payments -> ScientificGamesPlayer: POST /templates (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/createSubscription)
Payments -> ScientificGamesPlayer: GET /players/{playerId}/templates (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/createSubscription)

Client -> Api Gateway: AccountsController/getGamesHistory
Api Gateway -> ConfigurationApi: GET /business-config

Client -> Api Gateway: AccountsController/getGamesHistory
Api Gateway -> GamesHistoryApi: GET /game-history/{playerId}

Client -> Api Gateway: AccountsController/getGamesHistory
Api Gateway -> DrawGameResults: GET /tickets/purchase-confirmation
DrawGameResults -> TicketHistory: GET /wager-history-api/v1/wagers (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/getGamesHistory)

Client -> Api Gateway: AccountsController/getGamesHistory
Api Gateway -> TransactionHistory: GET /transactions/{playerId}/funding

Client -> Api Gateway: ReferenceDataController/getBusinessConfiguration
Api Gateway -> ConfigurationApi: GET /business-config

Client -> Api Gateway: AccountsController/getAccount
Api Gateway -> AccountsApi: GET /accounts/{playerId}
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/getAccount)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/getAccount)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/getAccount)

Client -> Api Gateway: AccountsController/closePlayerAccount
Api Gateway -> AccountsApi: PUT /accounts/{playerId}/close
AccountsApi -> ScientificGamesPlayer: PUT /profile/players/{playerId}/status (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/closePlayerAccount)

Client -> Api Gateway: AccountsController/closePlayerAccount
Api Gateway -> AccountsApi: POST /accounts/verifications
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/closePlayerAccount)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/closePlayerAccount)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/closePlayerAccount)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/closePlayerAccount)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/closePlayerAccount)
AccountsApi -> ScientificGamesService: GET /exclusions/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/closePlayerAccount)
AccountsApi -> ScientificGames: POST /login (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/closePlayerAccount)

Client -> Api Gateway: AccountsController/checkAvailability
Api Gateway -> AccountsApi: POST /accounts/availability
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/checkAvailability)

Client -> Api Gateway: AccountsController/updateAccountAfterRegistration
Api Gateway -> AccountsApi: PUT /accounts/{playerId}/update-after-registration
AccountsApi -> ScientificGamesPlayer: PUT /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccountAfterRegistration)
AccountsApi -> ScientificGamesPlayer: DELETE /profile/players/{playerId}/phones/{type} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccountAfterRegistration)
AccountsApi -> ScientificGamesPlayer: PUT /profile/players/{playerId}/phones/{type} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccountAfterRegistration)
AccountsApi -> SalesforceRest: POST /hub/v1/dataevents/key:{appKey}/rowset (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccountAfterRegistration)
AccountsApi -> SalesforceRest: GET /data/v1/customobjectdata/key/{appKey}/rowset/?$filter=Player_ID='{playerId}' (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccountAfterRegistration)

Client -> Api Gateway: AccountsController/updateAccountAfterRegistration
Api Gateway -> AccountsApi: POST /accounts/verifications
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccountAfterRegistration)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccountAfterRegistration)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccountAfterRegistration)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccountAfterRegistration)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccountAfterRegistration)
AccountsApi -> ScientificGamesService: GET /exclusions/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccountAfterRegistration)
AccountsApi -> ScientificGames: POST /login (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAccountAfterRegistration)

Client -> Api Gateway: AccountsController/updatePassword
Api Gateway -> AccountsApi: PUT /accounts/{playerId}/password
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePassword)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePassword)
AccountsApi -> ScientificGamesPlayer: PUT /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePassword)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePassword)

Client -> Api Gateway: AccountsController/updatePassword
Api Gateway -> AccountsApi: POST /accounts/verifications
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePassword)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePassword)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePassword)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePassword)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePassword)
AccountsApi -> ScientificGamesService: GET /exclusions/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePassword)
AccountsApi -> ScientificGames: POST /login (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updatePassword)

Client -> Api Gateway: AccountsController/updateSecurityQuestion
Api Gateway -> AccountsApi: PUT /accounts/{playerId}/security-question
AccountsApi -> ScientificGamesPlayer: PUT /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateSecurityQuestion)

Client -> Api Gateway: AccountsController/updateSecurityQuestion
Api Gateway -> AccountsApi: POST /accounts/verifications
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateSecurityQuestion)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateSecurityQuestion)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateSecurityQuestion)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateSecurityQuestion)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateSecurityQuestion)
AccountsApi -> ScientificGamesService: GET /exclusions/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateSecurityQuestion)
AccountsApi -> ScientificGames: POST /login (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateSecurityQuestion)

Client -> Api Gateway: AccountsController/forgotPassword
Api Gateway -> AccountsApi: PUT /password/forgotten
AccountsApi -> ScientificGamesService: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/forgotPassword)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/forgotPassword)
AccountsApi -> ScientificGamesService: POST /profile/authentications/update-password-tokens (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/forgotPassword)

Client -> Api Gateway: AccountsController/getPasswordRequirements
Api Gateway -> AccountsApi: GET /password/requirements

Client -> Api Gateway: AccountsController/verifyPasswordUpdateToken
Api Gateway -> AccountsApi: GET /password/verification/{token}
AccountsApi -> ScientificGamesService: GET /profile/authentications/update-password-tokens/{token} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/verifyPasswordUpdateToken)

Client -> Api Gateway: AccountsController/checkPasswordStrength
Api Gateway -> AccountsApi: POST /password/strength
AccountsApi -> ScientificGamesService: POST /profile/authentications/password-strength (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/checkPasswordStrength)

Client -> Api Gateway: AccountsController/refreshToken
Api Gateway -> AccountsApi: POST /accounts/token
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/refreshToken)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/refreshToken)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/refreshToken)
AccountsApi -> ScientificGamesService: GET /exclusions/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/refreshToken)
AccountsApi -> ScientificGames: POST /login (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/refreshToken)

Client -> Api Gateway: AccountsController/setNewPassword
Api Gateway -> AccountsApi: PUT /password/new
AccountsApi -> ScientificGamesService: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/setNewPassword)
AccountsApi -> ScientificGamesService: GET /profile/authentications/update-password-tokens/{token} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/setNewPassword)
AccountsApi -> ScientificGamesService: PUT /profile/authentications/update-password-tokens/{token} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/setNewPassword)

Client -> Api Gateway: AccountsController/updateNotifications
Api Gateway -> AccountsApi: PUT /notifications/{playerId}
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateNotifications)
AccountsApi -> SalesforceRest: POST /hub/v1/dataevents/key:{appKey}/rowset (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateNotifications)

Client -> Api Gateway: AccountsController/acknowledgeMessage
Api Gateway -> AccountsApi: PUT /accounts/{playerId}/acknowledge-message
AccountsApi -> ScientificGamesPlayer: PUT /profile/players/{playerId}/acknowledgements/messages/{messageId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/acknowledgeMessage)

Client -> Api Gateway: AccountsController/acknowledgeTerms
Api Gateway -> AccountsApi: POST /accounts/{playerId}/acknowledge-terms
AccountsApi -> ScientificGamesPlayer: POST /profile/players/{playerId}/acknowledgments/terms (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/acknowledgeTerms)

Client -> Api Gateway: AccountsController/getContactHealth
Api Gateway -> AccountsApi: GET /notifications/{playerId}
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/getContactHealth)
AccountsApi -> SalesforceRest: GET /data/v1/customobjectdata/key/{appKey}/rowset/?$filter=Player_ID='{playerId}' (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/getContactHealth)

Client -> Api Gateway: AccountsController/getNotifications
Api Gateway -> AccountsApi: GET /notifications/{playerId}
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/getNotifications)
AccountsApi -> SalesforceRest: GET /data/v1/customobjectdata/key/{appKey}/rowset/?$filter=Player_ID='{playerId}' (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/getNotifications)

Client -> Api Gateway: AccountsController/signOut
Api Gateway -> AccountsApi: POST /accounts/sign-out
AccountsApi -> ScientificGames: POST /logout (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/signOut)

Client -> Api Gateway: PaymentsController/withdrawalPlayerDeposit
Api Gateway -> AccountsApi: POST /accounts/verifications
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/withdrawalPlayerDeposit)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/withdrawalPlayerDeposit)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/withdrawalPlayerDeposit)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/withdrawalPlayerDeposit)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/withdrawalPlayerDeposit)
AccountsApi -> ScientificGamesService: GET /exclusions/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/withdrawalPlayerDeposit)
AccountsApi -> ScientificGames: POST /login (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/withdrawalPlayerDeposit)

Client -> Api Gateway: PaymentsController/withdrawalPlayerDeposit
Api Gateway -> PlayerBalance: POST /{playerId}/withdraw

Client -> Api Gateway: AccountsController/claimPrize
Api Gateway -> AccountsApi: POST /accounts/verifications
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/claimPrize)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/claimPrize)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/claimPrize)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/claimPrize)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/claimPrize)
AccountsApi -> ScientificGamesService: GET /exclusions/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/claimPrize)
AccountsApi -> ScientificGames: POST /login (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/claimPrize)

Client -> Api Gateway: AccountsController/claimPrize
Api Gateway -> WinningsApi: PUT /accounts/{playerId}/claim-prize

Client -> Api Gateway: AccountsController/claimPrize
Api Gateway -> Payments: GET /payment-methods/{playerId}
Payments -> ScientificGamesPlayer: GET /players/{playerId}/payment-methods (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/claimPrize)

Client -> Api Gateway: AccountsController/excludePlayer
Api Gateway -> AccountsApi: POST /accounts/verifications
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/excludePlayer)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/excludePlayer)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/excludePlayer)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/excludePlayer)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/excludePlayer)
AccountsApi -> ScientificGamesService: GET /exclusions/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/excludePlayer)
AccountsApi -> ScientificGames: POST /login (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/excludePlayer)

Client -> Api Gateway: AccountsController/excludePlayer
Api Gateway -> LimitsApi: POST /exclusions/{playerId}

Client -> Api Gateway: AccountsController/excludeFromAllGames
Api Gateway -> AccountsApi: POST /accounts/verifications
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/excludeFromAllGames)
AccountsApi -> ScientificGamesService: GET /profile/terms-and-conditions (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/excludeFromAllGames)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/verification-requests (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/excludeFromAllGames)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/excludeFromAllGames)
AccountsApi -> ScientificGamesService: GET /profile/players (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/excludeFromAllGames)
AccountsApi -> ScientificGamesService: GET /exclusions/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/excludeFromAllGames)
AccountsApi -> ScientificGames: POST /login (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/excludeFromAllGames)

Client -> Api Gateway: AccountsController/excludeFromAllGames
Api Gateway -> LimitsApi: POST /exclusions/{playerId}/games/all

Client -> Api Gateway: AccountsController/verifyClaimPrize
Api Gateway -> WinningsApi: GET /accounts/{playerId}/verify-claim-prize/{winningResultId}

Client -> Api Gateway: AccountsController/verifyClaimPrize
Api Gateway -> Payments: GET /payment-methods/{playerId}
Payments -> ScientificGamesPlayer: GET /players/{playerId}/payment-methods (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/verifyClaimPrize)

Client -> Api Gateway: AccountsController/verifyClaimPrizeByReferenceTicketId
Api Gateway -> WinningsApi: GET /accounts/{playerId}/verify-claim-prize-by-wager/{referenceTicketId}

Client -> Api Gateway: AccountsController/verifyClaimPrizeByReferenceTicketId
Api Gateway -> Payments: GET /payment-methods/{playerId}
Payments -> ScientificGamesPlayer: GET /players/{playerId}/payment-methods (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/verifyClaimPrizeByReferenceTicketId)

Client -> Api Gateway: AccountsController/getIwgWagerResultInfo
Api Gateway -> GamesHistoryApi: GET /game-history/{playerId}

Client -> Api Gateway: AccountsController/getIwgWagerResultInfo
Api Gateway -> GamesHistoryApi: GET /game-history/{playerId}/{gameHistoryId}

Client -> Api Gateway: AccountsController/getIwgWagerResultInfo
Api Gateway -> LimitsApi: GET /limits/{playerId}

Client -> Api Gateway: AccountsController/getGameHistoryDetails
Api Gateway -> GamesHistoryApi: GET /game-history/{playerId}/{gameHistoryId}

Client -> Api Gateway: AccountsController/getLimits
Api Gateway -> LimitsApi: GET /limits/{playerId}

Client -> Api Gateway: AccountsController/getLimits
Api Gateway -> Payments: GET /{playerId}/subscriptions/{subscriptionType}
Payments -> ScientificGamesPlayer: GET /players/{playerId}/templates (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/getLimits)
Payments -> ScientificGamesPlayer: GET /templates/{subscriptionId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/getLimits)

Client -> Api Gateway: DrawGameController/getNextDrawGame
Api Gateway -> GamesHistoryApi: GET /game-history/{playerId}/{gameId}/count

Client -> Api Gateway: DrawGameController/getNextDrawGame
Api Gateway -> DrawGamePlay: GET /games/next-draw
DrawGamePlay -> SG DrawGame: GET /rcs-dge-cache/v1/game-masterdata/games/{gameId} (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getNextDrawGame)
DrawGamePlay -> SG DrawGame: GET /rcs-dge-draw/v1/draw-masterdata/games/{gameId} (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getNextDrawGame)

Client -> Api Gateway: DrawGameController/getLastPlayedTicketByGame
Api Gateway -> GamesHistoryApi: GET /game-history/{playerId}/{gameId}/last-ticket-attributes

Client -> Api Gateway: DrawGameController/getLastPlayedTicketByGame
Api Gateway -> DrawGameResults: GET /tickets/{playerId}/{ticketId}
DrawGameResults -> TicketHistory: GET /wager-history-api/v1/wagers (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getLastPlayedTicketByGame)
DrawGameResults -> SG DrawGame: GET /rcs-dge-draw/v1/draw-masterdata/games/{gameId} (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getLastPlayedTicketByGame)

Client -> Api Gateway: AccountsController/getLastPlayedTicketByGame
Api Gateway -> GamesHistoryApi: GET /game-history/{playerId}/{gameId}/last-ticket-attributes

Client -> Api Gateway: AccountsController/getPlayerProperties
Api Gateway -> AccountsApi: GET /accounts/{playerId}/player-properties
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/getPlayerProperties)
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId}/properties (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/getPlayerProperties)

Client -> Api Gateway: AccountsController/updateAnimationsProperty
Api Gateway -> AccountsApi: PUT /accounts/{playerId}/player-properties/animations
AccountsApi -> ScientificGamesPlayer: PUT /profile/players/{playerId}/properties (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateAnimationsProperty)

Client -> Api Gateway: AccountsController/updateSyndicateProperty
Api Gateway -> AccountsApi: PUT /accounts/{playerId}/player-properties/syndicate
AccountsApi -> ScientificGamesPlayer: GET /profile/players/{playerId} (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateSyndicateProperty)
AccountsApi -> ScientificGamesPlayer: PUT /profile/players/{playerId}/properties (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateSyndicateProperty)

Client -> Api Gateway: AccountsController/updateSelfAssessmentScore
Api Gateway -> AccountsApi: PUT /accounts/{playerId}/player-properties/self-assessment-score
AccountsApi -> ScientificGamesPlayer: PUT /profile/players/{playerId}/properties (uk/co/supplier1/allwyn/apigateway/controller/AccountsController/updateSelfAssessmentScore)

Client -> Api Gateway: AccountsController/getModeratedInstantWinGames
Api Gateway -> InstantWinGame: GET /available

Client -> Api Gateway: AccountsController/getModeratedInstantWinGames
Api Gateway -> LimitsApi: GET /games

Client -> Api Gateway: AccountsController/getModeratedInstantWinGames
Api Gateway -> LimitsApi: GET /exclusions/{playerId}/excluded-games

Client -> Api Gateway: AccountsController/getModeratedInstantWinGames
Api Gateway -> CmsApi: GET /instant-win-games/games-basic

Client -> Api Gateway: AccountsController/getUnclaimedIwgWinnings
Api Gateway -> WinningsApi: GET /instant-win-games/{playerId}/unclaimed-winnings

Client -> Api Gateway: AccountsController/getExcludedGamesList
Api Gateway -> LimitsApi: GET /exclusions/{playerId}/excluded-games

Client -> Api Gateway: ContentController/getStartupSnippets
Api Gateway -> CmsApi: GET /snippets
CmsApi -> MagnoliaDelivery: GET /lottery/allwynTextSnippets (uk/co/supplier1/allwyn/apigateway/controller/ContentController/getStartupSnippets)
CmsApi -> MagnoliaDelivery: GET /lottery/allwynImageSnippets (uk/co/supplier1/allwyn/apigateway/controller/ContentController/getStartupSnippets)
CmsApi -> MagnoliaDelivery: GET /lottery/allwynRichTextSnippets (uk/co/supplier1/allwyn/apigateway/controller/ContentController/getStartupSnippets)

Client -> Api Gateway: PaymentsController/getBankAccount
Api Gateway -> Payments: GET /payment-methods/{playerId}/bank-account
Payments -> ScientificGamesPlayer: GET /players/{playerId}/payment-methods (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/getBankAccount)
Payments -> ScientificGamesPlayer: DELETE /players/{playerId}/payment-methods/{paymentMethodId} (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/getBankAccount)

Client -> Api Gateway: DirectDebitController/getDirectDebitSummary
Api Gateway -> Payments: GET /payment-methods/{playerId}/bank-account
Payments -> ScientificGamesPlayer: GET /players/{playerId}/payment-methods (uk/co/supplier1/allwyn/apigateway/controller/DirectDebitController/getDirectDebitSummary)
Payments -> ScientificGamesPlayer: DELETE /players/{playerId}/payment-methods/{paymentMethodId} (uk/co/supplier1/allwyn/apigateway/controller/DirectDebitController/getDirectDebitSummary)

Client -> Api Gateway: DirectDebitController/getDirectDebitSummary
Api Gateway -> Payments: GET /{playerId}/subscriptions/{subscriptionType}
Payments -> ScientificGamesPlayer: GET /players/{playerId}/templates (uk/co/supplier1/allwyn/apigateway/controller/DirectDebitController/getDirectDebitSummary)
Payments -> ScientificGamesPlayer: GET /templates/{subscriptionId} (uk/co/supplier1/allwyn/apigateway/controller/DirectDebitController/getDirectDebitSummary)

Client -> Api Gateway: PaymentsController/getSubscriptions
Api Gateway -> Payments: GET /{playerId}/subscriptions/{subscriptionType}
Payments -> ScientificGamesPlayer: GET /players/{playerId}/templates (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/getSubscriptions)
Payments -> ScientificGamesPlayer: GET /templates/{subscriptionId} (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/getSubscriptions)

Client -> Api Gateway: DrawGameController/getLuckyDip
Api Gateway -> DrawGamePlay: GET /games/{gameId}/lucky-dip
DrawGamePlay -> PublisherApi: PATCH /publish/{queueName} (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getLuckyDip)

Client -> Api Gateway: DrawGameController/getMessageQueueData
Api Gateway -> DrawGamePlay: GET /message-queue/{queueName}

Client -> Api Gateway: DrawGameController/checkWinningNumbers
Api Gateway -> DrawGameResults: POST /results/{gameId}/winning-numbers
DrawGameResults -> DrawHistory: POST /draw-history-api/v1/games/{gameId}/draws/checkWinningNumbers (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/checkWinningNumbers)

Client -> Api Gateway: DrawGameController/getDrawResults
Api Gateway -> DrawGameResults: GET /results/{gameId}
DrawGameResults -> DrawHistory: GET /draw-history-api/v1/games/{gameId}/draws (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getDrawResults)

Client -> Api Gateway: DrawGameController/getLastDrawResultForAllGames
Api Gateway -> DrawGameResults: GET /results
DrawGameResults -> DrawHistory: GET /draw-history-api/v1/games/draws/last (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getLastDrawResultForAllGames)

Client -> Api Gateway: DrawGameController/getDrawResultDetailsJackpotCard
Api Gateway -> DrawGameResults: GET /results/jackpot-card/{gameId}/{drawNo}
DrawGameResults -> DrawHistory: GET /draw-history-api/v1/games/{gameId}/draws/{drawNo} (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getDrawResultDetailsJackpotCard)

Client -> Api Gateway: DrawGameController/downloadDrawResults
Api Gateway -> DrawGameResults: GET /results/{gameId}/download
DrawGameResults -> DrawHistory: GET /draw-history-api/v1/games/{gameId}/draws (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/downloadDrawResults)

Client -> Api Gateway: DrawGameController/getDrawResultDetails
Api Gateway -> DrawGameResults: GET /results/{gameId}/{drawNo}
DrawGameResults -> DrawHistory: GET /draw-history-api/v1/games/{gameId}/draws (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getDrawResultDetails)

Client -> Api Gateway: DrawGameController/getLatestDrawDetails
Api Gateway -> DrawGameResults: GET /results/{gameId}/latest
DrawGameResults -> DrawHistory: GET /draw-history-api/v1/games/{gameId}/draws/last (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getLatestDrawDetails)

Client -> Api Gateway: DrawGameController/getDrawDates
Api Gateway -> DrawGameResults: GET /results/{gameId}/draw-dates
DrawGameResults -> DrawHistory: GET /draw-history-api/v1/games/{gameId}/draws (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getDrawDates)

Client -> Api Gateway: DrawGameController/getTicketResults
Api Gateway -> DrawGameResults: GET /tickets/{ticketId}/results
DrawGameResults -> DrawHistory: GET /draw-history-api/v1/games/{gameId}/draws/{drawNo} (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getTicketResults)
DrawGameResults -> TicketHistory: GET /wager-history-api/v1/wagers (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getTicketResults)
DrawGameResults -> SG DrawGame: GET /rcs-dge-cache/v1/game-masterdata/games/{gameId} (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getTicketResults)
DrawGameResults -> SG DrawGame: GET /rcs-dge-draw/v1/draw-masterdata/games/{gameId} (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getTicketResults)

Client -> Api Gateway: DrawGameController/getPurchasedTicketDetails
Api Gateway -> DrawGameResults: GET /tickets/{playerId}/{ticketId}
DrawGameResults -> TicketHistory: GET /wager-history-api/v1/wagers (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getPurchasedTicketDetails)
DrawGameResults -> SG DrawGame: GET /rcs-dge-draw/v1/draw-masterdata/games/{gameId} (uk/co/supplier1/allwyn/apigateway/controller/DrawGameController/getPurchasedTicketDetails)

Client -> Api Gateway: AccountsController/addFavouriteGame
Api Gateway -> FavouritesApi: POST /favourite-games/{playerId}/{gameTypeId}

Client -> Api Gateway: AccountsController/saveFavouriteNumbers
Api Gateway -> FavouritesApi: POST /favourite-numbers/{playerId}/{gameId}

Client -> Api Gateway: AccountsController/getFavouriteNumbers
Api Gateway -> FavouritesApi: GET /favourite-numbers/{playerId}/{gameId}

Client -> Api Gateway: AccountsController/getFavouriteGames
Api Gateway -> FavouritesApi: GET /favourite-games/{playerId}/{gameTypeId}

Client -> Api Gateway: AccountsController/deleteFavouriteNumbers
Api Gateway -> FavouritesApi: DELETE /favourite-numbers/{playerId}/{gameId}

Client -> Api Gateway: AccountsController/removeFavouriteGame
Api Gateway -> FavouritesApi: DELETE /favourite-games/{playerId}/{gameTypeId}/{gameId}

Client -> Api Gateway: AccountsController/validateWager
Api Gateway -> LimitsApi: POST /wager/{playerId}/validate

Client -> Api Gateway: AccountsController/createLimit
Api Gateway -> LimitsApi: POST /limits/{playerId}

Client -> Api Gateway: AccountsController/excludeFromGames
Api Gateway -> LimitsApi: POST /exclusions/{playerId}/games

Client -> Api Gateway: AccountsController/getPlaytimeCounters
Api Gateway -> LimitsApi: GET /playtimecounter/{playerId}

Client -> Api Gateway: PaymentsController/getBalance
Api Gateway -> PlayerBalance: GET /{playerId}

Client -> Api Gateway: PaymentsController/getPaymentMethods
Api Gateway -> Payments: GET /payment-methods/{playerId}
Payments -> ScientificGamesPlayer: GET /players/{playerId}/payment-methods (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/getPaymentMethods)

Client -> Api Gateway: PaymentsController/getBankCards
Api Gateway -> Payments: GET /payment-methods/card/{playerId}
Payments -> ScientificGamesPlayer: GET /players/{playerId}/payment-methods (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/getBankCards)

Client -> Api Gateway: PaymentsController/addPaymentMethod
Api Gateway -> Payments: POST /payment-methods/{playerId}
Payments -> ScientificGamesPlayer: POST /players/{playerId}/creditCards (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/addPaymentMethod)

Client -> Api Gateway: PaymentsController/checkFirstDeposit
Api Gateway -> TransactionHistory: GET /transactions/{playerId}/first-deposit-done

Client -> Api Gateway: PaymentsController/addPlayerDeposit
Api Gateway -> TransactionHistory: GET /transactions/{playerId}/first-deposit-done

Client -> Api Gateway: PaymentsController/addPlayerDeposit
Api Gateway -> PlayerBalance: POST /{playerId}

Client -> Api Gateway: PaymentsController/addPlayerDeposit
Api Gateway -> PlayerBalance: POST /{playerId}/first-deposit

Client -> Api Gateway: PaymentsController/deletePaymentMethod
Api Gateway -> Payments: DELETE /payment-methods/{playerId}/{paymentMethodId}
Payments -> ScientificGamesPlayer: DELETE /players/{playerId}/payment-methods/{paymentMethodId} (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/deletePaymentMethod)

Client -> Api Gateway: PaymentsController/getPaymentSchedule
Api Gateway -> Payments: GET /{playerId}/subscriptions/{subscriptionType}/schedule
Payments -> ScientificGamesPlayer: GET /players/{playerId}/templates (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/getPaymentSchedule)
Payments -> ScientificGamesPlayer: GET /templates/{subscriptionId} (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/getPaymentSchedule)

Client -> Api Gateway: PaymentsController/getPlayslipsByGame
Api Gateway -> Payments: GET /{playerId}/subscriptions/playslips
Payments -> ScientificGamesPlayer: GET /players/{playerId}/templates (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/getPlayslipsByGame)

Client -> Api Gateway: PaymentsController/deleteSubscription
Api Gateway -> Payments: DELETE /{playerId}/subscriptions/{subscriptionType}
Payments -> ScientificGamesPlayer: DELETE /players/{playerId}/payment-methods/{paymentMethodId} (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/deleteSubscription)
Payments -> ScientificGamesPlayer: DELETE /templates/{subscriptionId} (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/deleteSubscription)
Payments -> ScientificGamesPlayer: GET /players/{playerId}/templates (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/deleteSubscription)

Client -> Api Gateway: PaymentsController/calculateTentativeSchedule
Api Gateway -> Payments: POST /{playerId}/subscriptions/tentative-schedule
Payments -> ScientificGamesPlayer: POST /templates (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/calculateTentativeSchedule)

Client -> Api Gateway: PaymentsController/createBankAccount
Api Gateway -> Payments: POST /payment-methods/{playerId}/bank-account
Payments -> ScientificGamesPlayer: GET /players/{playerId}/payment-methods (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/createBankAccount)
Payments -> ScientificGamesPlayer: POST /players/{playerId}/payment-methods (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/createBankAccount)
Payments -> ScientificGamesPlayer: DELETE /players/{playerId}/payment-methods/{paymentMethodId} (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/createBankAccount)
Payments -> ScientificGamesPlayer: GET /players/{playerId}/templates (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/createBankAccount)

Client -> Api Gateway: PaymentsController/deletePlayslipFromSubscription
Api Gateway -> Payments: DELETE {playerId}/subscriptions/{subscriptionType}/playslips/{playslipId}

Client -> Api Gateway: PaymentsController/getDetailedPlayslips
Api Gateway -> Payments: GET /{playerId}/subscriptions/{subscriptionType}/playslips/{gameId}
Payments -> ScientificGamesPlayer: GET /players/{playerId}/templates (uk/co/supplier1/allwyn/apigateway/controller/PaymentsController/getDetailedPlayslips)

Client -> Api Gateway: WebchatController/createWebchatSession
Api Gateway -> WebChatRest: GET /webchat/ims
`;